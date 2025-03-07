import React, { useState } from "react";
import {
  useForgotPasswordMutation,
  useForgotPasswordVerifyOtpMutation,
} from "../Redux/userRoutes/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpSent, setOtpSent] = useState(false);
  const [isEmailDisabled, setIsEmailDisabled] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();
  const [forgotPasswordVerifyOtp,{isLoading}] = useForgotPasswordVerifyOtpMutation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    if (e.target.value.length === 1 && index < otp.length - 1) {
      const nextInput = document.querySelector(`#otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    setOtp(newOtp);
  };

  const sendOtp = async () => {
    if (!email) {
      toast("Please enter a valid email address.", { position: "top-center" });
      return;
    }
    try {
      const res = await forgotPassword({ email }).unwrap();
      if (res.success === true) {
        setOtpSent(true);
        setIsEmailDisabled(true);
        toast.success(res.message, { position: "top-center" });
      } else {
        toast.error(res.error.message, { position: "top-center" });
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast.warn("Please enter a valid 6-digit OTP.");
      return;
    }
    try {
      const res = await forgotPasswordVerifyOtp({
        email,
        otp: otpCode,
      }).unwrap();
      navigate("/reset-password", { state: { email } });
      toast.success(res.message, { position: "top-center" });
    } catch (error) {
      toast.error(error?.data?.message, { position: "top-center" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-6 md:px-36 ">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side - Image */}
          <div className="md:w-1/2 bg-blue-500">
            <img
              src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
              alt="Change Password"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right side */}
          <div className="md:w-1/2 p-6 sm:p-10">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-center text-blue-600">
              Forgot Password
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                disabled={isEmailDisabled}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Send OTP Button */}
            <div className="mb-6 flex justify-end">
              <button
                onClick={sendOtp}
                className="w-lg text-blue-500 font-bold py-4 pl-2 pr-2 rounded-lg hover:underline"
              >
                Send OTP
              </button>
            </div>

            {/* OTP Input Fields (Only visible after OTP is sent) */}
            {otpSent && (
              <div>
                <div className="flex justify-between mb-6 space-x-2">
                  {otp.map((digit, index) => (
                    <input
                      id={`otp-input-${index}`} // Unique ID for each input
                      key={index}
                      type="text"
                      value={digit}
                      maxLength="1"
                      onChange={(e) => handleOtpChange(e, index)}
                      className="w-10 h-10 md:w-12 md:h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                    />
                  ))}
                </div>

                {/* Submit Button to Verify OTP */}
                <div>
                  <button
                    onClick={verifyOtp} // Verify OTP when clicked
                    className={`w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 ${isLoading?'cursor-not-allowed':''}`}
                  >
                    {isLoading?'Verifying...':'Verify OTP'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
