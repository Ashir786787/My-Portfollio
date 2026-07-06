import nodemailer from "nodemailer";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
let resendClient = null;
if (resendApiKey) {
  resendClient = new Resend(resendApiKey);
}

const sendEmail = async (to, subject, html) => {
  if (resendClient) {
    try {
      await resendClient.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to,
        subject,
        html,
      });
      console.log(`✅ Email sent to ${to} via Resend`);
      return;
    } catch (resendError) {
      console.log("Resend failed, falling back to SMTP:", resendError.message);
    }
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Ashir Portfolio" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  console.log(`✅ Email sent to ${to} via SMTP`);
};

export default sendEmail;
