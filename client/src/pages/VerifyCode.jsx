import { useState, useRef, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function VerifyCode() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const email = searchParams.get("email");
  const { verifyCode, resendCode } = useAuth();
  const navigate = useNavigate();

  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (!userId) {
      setError("Invalid verification link.");
    }
  }, [userId]);

  const handleDigitChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      const newDigits = pasted.split("");
      setDigits(newDigits);
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = digits.join("");
    if (code.length !== 6) {
      setError("Please enter all 6 digits.");
      return;
    }
    if (!userId) {
      setError("Invalid verification link.");
      return;
    }

    setLoading(true);
    try {
      await verifyCode(userId, code);
      navigate("/");
    } catch (err) {
      setError(err.message || "Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!userId) return;
    setResending(true);
    try {
      const res = await resendCode(userId);
      setMessage(res.message || "New code sent!");
      setDigits(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
      setTimeout(() => setMessage(""), 5000);
    } catch (err) {
      setError(err.message || "Failed to resend code.");
    } finally {
      setResending(false);
    }
  };

  if (!userId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Invalid Link</h2>
          <p className="text-gray-400 mb-6">No user ID provided.</p>
          <Link
            to="/signup"
            className="inline-block py-3 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 relative">
        <Link to="/" className="absolute top-6 left-6 text-gray-400 hover:text-violet-400 transition">
          ← Back
        </Link>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Verify Your Email</h2>
          <p className="text-gray-400">
            Enter the 6-digit code sent to
          </p>
          <p className="text-violet-400 font-medium">{email || "your email"}</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            {message}
          </div>
        )}

        <div className="flex gap-3 justify-center mb-8">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-14 h-16 text-center text-2xl font-bold text-white bg-transparent border border-white/10 rounded-xl outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={loading || digits.join("").length !== 6}
          className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white font-semibold transition cursor-pointer mb-4"
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>

        <p className="text-gray-400 text-center text-sm">
          Didn't receive the code?{" "}
          <button
            onClick={handleResend}
            disabled={resending}
            className="text-violet-400 hover:text-violet-300 underline bg-transparent border-none cursor-pointer"
          >
            {resending ? "Sending..." : "Resend Code"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default VerifyCode;