import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

// Determine if we're in production (check multiple ways for Render/Vercel)
const isProduction = process.env.NODE_ENV === "production" || 
                     process.env.RENDER || 
                     process.env.VERCEL ||
                     !process.env.NODE_ENV || 
                     process.env.NODE_ENV !== "development";

app.use(
  cors({
    origin: isProduction
      ? [
          "https://vibe-connect-video-calling-realtime.vercel.app",
          "https://vibe-connect-video-calling-realtime-taupe.vercel.app"
        ]
      : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Connect to DB immediately for serverless
connectDB();

// Only start server if not in Vercel serverless environment
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel serverless
export default app;
