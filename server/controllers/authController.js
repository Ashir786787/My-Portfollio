import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";

const generateCode = () => crypto.randomInt(100000, 999999).toString();

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = generateCode();
    const codeExpires = new Date(Date.now() + 10 * 60 * 1000);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      verificationCode,
      codeExpires,
    });

    const codeEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #8b5cf6;">Your Verification Code</h2>
        <p style="color: #333;">Hello ${fullName},</p>
        <p style="color: #333;">Use the code below to verify your account:</p>
        <div style="text-align: center; margin: 32px 0;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #8b5cf6; background: #f5f3ff; padding: 16px 32px; border-radius: 12px;">
            ${verificationCode}
          </span>
        </div>
        <p style="color: #666;">This code expires in 10 minutes.</p>
        <p style="color: #666;">If you didn't request this, ignore this email.</p>
      </div>
    `;

    try {
      await sendEmail(email, "Your Portfolio Verification Code", codeEmailHtml);
    } catch (emailError) {
      console.log(`Email to ${email} failed:`, emailError.message);
    }

    console.log(`Verification code for ${email}: ${verificationCode}`);

    const adminHtml = `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #8b5cf6;">New User Registration</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <hr />
        <p style="color: #888;">A new user has registered on your portfolio.</p>
      </div>
    `;

    try {
      await sendEmail(
        process.env.EMAIL_USER,
        "New Portfolio Registration",
        adminHtml
      );
    } catch (adminEmailError) {
      console.log("Admin notification email failed");
    }

    res.status(201).json({
      success: true,
      message: "Account created! Check your email for the verification code.",
      userId: user._id,
      devCode: verificationCode,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        needsVerification: true,
        userId: user._id,
        message: "Please verify your email before logging in.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password.",
      });
    }

    user.lastLoginAt = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const verifyCode = async (req, res) => {
  try {
    const { userId, code } = req.body;

    if (!userId || !code) {
      return res.status(400).json({
        success: false,
        message: "User ID and code are required.",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Account already verified. Please login.",
      });
    }

    if (user.verificationCode !== code) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code.",
      });
    }

    if (user.codeExpires < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Verification code has expired. Request a new one.",
      });
    }

    user.isVerified = true;
    user.verificationCode = "";
    user.codeExpires = null;
    user.lastLoginAt = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Email verified successfully. Welcome!",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const resendCode = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required.",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Account already verified. Please login.",
      });
    }

    const newCode = generateCode();
    user.verificationCode = newCode;
    user.codeExpires = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    const codeEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #8b5cf6;">New Verification Code</h2>
        <p style="color: #333;">Hello ${user.fullName},</p>
        <p style="color: #333;">Here is your new verification code:</p>
        <div style="text-align: center; margin: 32px 0;">
          <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #8b5cf6; background: #f5f3ff; padding: 16px 32px; border-radius: 12px;">
            ${newCode}
          </span>
        </div>
        <p style="color: #666;">This code expires in 10 minutes.</p>
        <p style="color: #666;">If you didn't request this, ignore this email.</p>
      </div>
    `;

    try {
      await sendEmail(user.email, "New Verification Code", codeEmailHtml);
    } catch (emailError) {
      console.log("Resend email failed, new code:", newCode);
    }

    console.log(`New verification code for ${user.email}: ${newCode}`);

    res.status(200).json({
      success: true,
      message: "New verification code sent to your email.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


