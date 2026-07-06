import express from "express";

import {
  signup,
  login,
  verifyCode,
  resendCode,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-code", verifyCode);
router.post("/resend-code", resendCode);

export default router;