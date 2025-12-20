import express from "express";
import mongoose from "mongoose";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

// Health check endpoint
router.get("/health", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.status(200).json({ 
    success: true, 
    message: "Server is running",
    database: dbStatus,
    env: process.env.NODE_ENV || "not set",
    hasJWT: !!process.env.JWT_SECRET_KEY,
    hasMongo: !!process.env.MONGO_URI
  });
});

export default router;
