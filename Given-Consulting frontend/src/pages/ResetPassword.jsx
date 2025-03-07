import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../Redux/userRoutes/userApi";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const email = location?.state?.email;
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }
    if (!password || !confirmPassword) {
      toast.warn("Both fields are required.", { position: "top-center" });
      return;
    }
  
    if (password.length < 8) {
      toast.warn("Password must be at least 8 characters long.", { position: "top-center" });
      return;
    }
  
    try {
      const res = await resetPassword({ email, newPassword: password }).unwrap();
      console.log(res);
      toast.success(res?.message, { position: "top-center" });
      navigate('/');
    } catch (error) {
      toast.error(error?.data?.message || "Failed to reset password.", { position: "top-center" });
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen p-6 md:px-36">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-blue-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
            alt="Update Password"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side */}
        <div className="md:w-1/2 p-6 sm:p-10">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Update Password
          </h2>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Update Password Button */}
          <div>
            <button
              onClick={handleUpdatePassword}
              className={`w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
