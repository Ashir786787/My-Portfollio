import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill all required fields.");
      return;
    }
    setLoading(true);
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 relative">
        <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-violet-400 transition">
          ← Back
        </Link>
        <h2 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h2>
        <p className="text-gray-400 text-center mb-8">Sign in to your account</p>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-4 rounded-xl bg-transparent border border-white/10 outline-none focus:border-violet-500 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white font-semibold transition cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-violet-400 hover:text-violet-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
