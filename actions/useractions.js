"use server"

import User from "@/models/user"
import mongoose from "mongoose"
import Razorpay from "razorpay"
import payment from "@/models/payment"

export const initiate = async (amount ,to_username ,paymentform) => {
    await connectdb()
    var instance = new Razorepay({key_id: process.env.KEy})
}

export async function fetchuser(email) {
  await mongoose.connect("mongodb://localhost:27017/send-me-a-chai")
  const user = await User.findOne({ email })
  return user
}

export async function updateProfile(email, data) {
  await mongoose.connect("mongodb://localhost:27017/send-me-a-chai")
  const updatedUser = await User.findOneAndUpdate(
    { email },
    { $set: data },
    { new: true }
  )
  return updatedUser
}
