import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  
  if (!uri) {
    console.error("❌ MONGO_URI is not set in environment variables!");
    console.error("Please set MONGO_URI in your Render environment variables.");
    // In production, we should fail if DB is not configured
    if (process.env.RENDER || process.env.VERCEL || process.env.NODE_ENV === "production") {
      throw new Error("MONGO_URI is required in production");
    }
    return;
  }

  // If already connected, return
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    isConnected = false;
    
    // In production, we should fail if DB connection fails
    if (process.env.RENDER || process.env.VERCEL || process.env.NODE_ENV === "production") {
      throw error;
    }
  }
};