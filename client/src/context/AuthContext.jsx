import { createContext, useContext, useState, useEffect } from "react";
import {
  login as loginApi,
  signup as signupApi,
  verifyCode as verifyCodeApi,
  resendCode as resendCodeApi,
} from "../api/authApi.js";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user") || "null"));
    }
    setLoading(false);
  }, [token]);

  const saveAuth = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
  };

  const clearAuth = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const signup = async (data) => {
    const res = await signupApi(data);
    return res;
  };

  const login = async (data) => {
    const res = await loginApi(data);
    saveAuth(res.token, res.user);
    return res;
  };

  const verifyCode = async (userId, code) => {
    const res = await verifyCodeApi(userId, code);
    saveAuth(res.token, res.user);
    return res;
  };

  const resendCode = async (userId) => {
    const res = await resendCodeApi(userId);
    return res;
  };

  const logout = () => clearAuth();

  return (
    <AuthContext.Provider
      value={{ user, token, loading, signup, login, verifyCode, resendCode, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
