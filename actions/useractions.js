"use server"

import User from "@/models/user"
import Payment from "@/models/payment"
import Razorpay from "razorpay"
import connectdb from "@/db/connectdb"

export const initiate = async (amount, to_username, paymentform) => {
    await connectdb()
    let user = await User.findOne({ username: to_username })

    if (!user || !user.razorpayid || !user.razorpaysecret) {
        return { success: false, message: "User not found or payment details not configured." }
    }

    try {
        var instance = new Razorpay({
            key_id: user.razorpayid,
            key_secret: user.razorpaysecret
        })

        let options = {
            amount: Number.parseInt(amount), // already in paise
            currency: "INR"
        }

        let x = await instance.orders.create(options)

        await Payment.create({ 
            oid: x.id, 
            amount: Number.parseInt(amount),
            to_user: to_username, 
            name: paymentform.name, 
            message: paymentform.message 
        })

        return { success: true, order: x }   // ✅ return whole order directly
    } catch (error) {
        console.error("Razorpay order creation failed:", error)
        return { success: false, message: "Failed to create payment order." }
    }
}

// Fetches a single user from the database
export async function fetchuser(username) {
    await connectdb()
    const user = await User.findOne({ username }).lean()
    if (user) {
        user._id = user._id.toString();
        return user;
    }
    return null;
}

// Fetches payments for a specific user, sorted by amount
export async function fetchpayments(username) {
    await connectdb()
    const payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    payments.forEach(p => p._id = p._id.toString());
    return payments
}

// Updates a user's profile
export const updateProfile = async (data, oldusername) => {
    await connectdb()
    let ndata = data;

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{

        
        await User.updateOne({email: ndata.email}, ndata)
    }


}
