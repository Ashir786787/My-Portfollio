import express from "express";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.get("/email", async (req, res) => {
  try {
    await sendEmail(
      process.env.EMAIL_USER,
      "Portfolio Email Test",
      `
        <h2>Email Test Successful ✅</h2>
        <p>Your Nodemailer configuration is working correctly.</p>
      `
    );

    res.json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
});

export default router;