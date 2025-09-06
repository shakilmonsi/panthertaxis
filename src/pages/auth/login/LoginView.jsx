import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../featured/auth/AuthContext";
import ForgotPasswordModal from "../ForgotPasswordModal";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const {
    login,
    loading: authLoading,
    error: authError,
    success: authSuccess,
    setError: setAuthError,
    setSuccess: setAuthSuccess,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAuthError(null);
    setAuthSuccess(null);

    // --- Client-side Validation ---
    if (!email || !password) {
      setAuthError("Please enter your email and password.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setAuthError("Please enter a valid email address.");
      return;
    }

    try {
      const result = await login(email, password, rememberMe);

      if (result.success) {
        setEmail("");
        setPassword("");
        setRememberMe(false);
        navigate("/");
      } else {
        // Error already set by AuthContext
      }
    } catch (err) {
      console.error("Login error in MergedLoginComponent:", err);
    }
  };

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="s flex w-full max-w-md flex-col items-center gap-8 rounded-xl p-6 md:p-10">
        <h1 className="text-3xl font-semibold text-zinc-900">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-normal text-slate-700"
              htmlFor="email"
            >
              Email Address*
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm">
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-base font-normal text-gray-500 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-normal text-slate-700"
              htmlFor="password"
            >
              Password*
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow-sm">
              <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-base font-normal text-gray-500 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label
                htmlFor="remember"
                className="text-sm font-semibold text-neutral-600"
              >
                Remember me
              </label>
            </div>
            <button
              type="button"
              onClick={openForgotPasswordModal}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Error and Success messages */}
          {authError && (
            <p className="font-poppins self-stretch text-center text-sm text-red-500">
              {authError}
            </p>
          )}
          {authSuccess && (
            <p className="font-poppins self-stretch text-center text-sm text-green-500">
              {authSuccess}
            </p>
          )}

          {/* Log In Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            disabled={authLoading}
          >
            {authLoading ? "Logging In..." : "Log In"}
          </button>
        </form>
        {/* Sign Up Link */}
        <p className="text-sm font-semibold text-neutral-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordModalOpen}
        onClose={closeForgotPasswordModal}
      />
    </div>
  );
};

export default LoginView;
