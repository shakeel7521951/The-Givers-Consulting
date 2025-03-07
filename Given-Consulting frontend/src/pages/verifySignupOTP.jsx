import React, { useState } from 'react';
import { useVerifyOTPMutation } from '../Redux/userRoutes/userApi';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifySignupOtp = () => {
  // State to store OTP
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const location = useLocation();
  const [getVerifyOTP,{isLoading}] = useVerifyOTPMutation();
  const email = location.state?.email;
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (value, index) => {
    // Only allow numeric input
    if (!isNaN(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move to the next input if a value is entered
      if (value !== "" && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
   try {
    const result = await getVerifyOTP({otp:enteredOtp,email:email}).unwrap();
    toast.success(result?.message,{position:'top-center'});
    navigate('/');
   } catch (error) {
    toast.error(error?.data?.message)
   }

  };

  return (
    <section className="w-[90vw] sm:w-[80vw] mx-auto mt-28 sm:mt-10 sm:mb-10">
      <div className="w-full bg-white text-black rounded-lg shadow-lg p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="hidden md:block w-1/2 p-4 h-[100vh]">
          <img
            src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
            alt="Signup OTP"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 lg:h-[600px] lg:flex lg:items-center lg:justify-center lg:flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">Verify Signup OTP</h2>
          <form onSubmit={handleSubmit} className="space-y-4 w-[90%]">
            <div className="flex justify-between items-center gap-2">
              {/* OTP Input Fields */}
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  className="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:border-blue-500"
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-[#050c2b] text-white p-2 rounded-md hover:bg-[#090d1d] transition-colors mt-4"
            >
              {isLoading?'Loading...':'Verify OTP'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VerifySignupOtp;
