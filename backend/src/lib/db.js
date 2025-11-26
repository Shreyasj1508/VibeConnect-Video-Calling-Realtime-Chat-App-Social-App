import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI not set — skipping MongoDB connection (dev mode).");
    return;
   }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  catch (error) {
    console.error("Error in connecting to MongoDB", error);

  // Do not exit the process — allow server to  run for local/dev usage

  }
};