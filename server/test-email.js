import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  connectionTimeout: 10000,
});

try {
  const info = await transporter.sendMail({
    from: `"Ashir Portfolio" <${process.env.EMAIL_USER}>`,
    to: "test-verify@yopmail.com",
    subject: "Your 6-Digit Code",
    html: "<p>Code: <strong>483729</strong></p>",
  });
  console.log("SUCCESS:", info.messageId);
  process.exit(0);
} catch (e) {
  console.log("ERROR:", e.message);
  process.exit(1);
}
