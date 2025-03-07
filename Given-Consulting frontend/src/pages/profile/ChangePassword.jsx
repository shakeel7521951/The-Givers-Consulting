import React, { useState } from "react";
import { useUpdatePasswordMutation } from "../../Redux/userRoutes/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updatePassword(formData);
      if (res?.data?.success) {
        toast.success(res.data.message, { position: "top-center" });
        navigate(-1);
      } else {
        const errorMessage = res?.error?.data?.message || "An error occurred!";
        toast.error(errorMessage, { position: "top-center" });
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.error?.data?.message ||
        "Something went wrong!";
      toast.error(errorMessage, { position: "top-center" });
    }
  };

  return (
    <div className="flex items-center justify-center rounded-md min-h-screen p-4 sm:px-28">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-blue-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
            alt="Change Password"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-6 sm:p-12">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Update Password
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Current Password Input */}
            <div className="mb-4">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <input
                type="password"
                id="oldPassword"
                className="w-full mt-1 px-6 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Current Password"
                value={formData.oldPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* New Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter New Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Confirm New Password Input */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              {isLoading?'Updating....':'Update'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
