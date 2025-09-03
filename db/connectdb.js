// lib/connectdb.js
import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/send-me-a-chai"

let isConnected = false // Track the connection status

export default async function connectdb() {
  if (isConnected) return

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = db.connections[0].readyState === 1
    console.log("✅ MongoDB connected")
  } catch (err) {
    console.error("❌ MongoDB connection error:", err)
    throw err
  }
}
