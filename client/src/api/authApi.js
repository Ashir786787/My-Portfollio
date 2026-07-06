import { post } from "./api.js";

export const signup = (data) => post("/auth/signup", data);

export const login = (data) => post("/auth/login", data);

export const verifyCode = (userId, code) =>
  post("/auth/verify-code", { userId, code });

export const resendCode = (userId) =>
  post("/auth/resend-code", { userId });
