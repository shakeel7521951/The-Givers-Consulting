import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateProfileMutation } from "../../Redux/userRoutes/userApi";
import { toast } from "react-toastify";
import { clearProfile, setProfile } from "../../Redux/userRoutes/userSlice";
import { Link, useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { profile } = useSelector((state) => state.user);
  const [updateProfile] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = async (e) => {
    const profilePic = e.target.files[0];
    if (profilePic) {
      const formData = new FormData();
      formData.append("profilePic", profilePic); // Field name should match the backend

      try {
        const response = await updateProfile(formData).unwrap();
        dispatch(setProfile(response?.user));
        setSelectedImage(URL.createObjectURL(profilePic)); 
        toast.success("Profile image updated!", { position: "top-center" });
      } catch (error) {
        toast.error(error.message || "Failed to update image.", {
          position: "top-center",
        });
      }
    }
  };

  const handleDeleteProfile = async () => {
    try {
      // Call to delete profile
      dispatch(clearProfile());
      navigate("/");
      toast.success("Profile deleted successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Failed to delete profile.", { position: "top-center" });
    }
  };

  useEffect(() => {}, [profile]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  const userInitial = profile?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="flex justify-center my-8">
      <div className="w-[450px] h-auto bg-white rounded-lg flex flex-col items-center text-center py-6 shadow-lg">
        {/* Profile Image */}
        <div
          className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center bg-gray-200 text-xl font-bold text-blue-600 relative cursor-pointer"
          onClick={() => document.getElementById("imageInput").click()} // Trigger file input on click
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : profile.profilePic?.url ? (
            <img
              src={profile.profilePic?.url}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            userInitial
          )}
        </div>

        {/* Hidden File Input */}
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Profile Info */}
        <p className="text-2xl font-bold mt-4 text-blue-600">
          Hello, {profile.name}
        </p>
        <p className="text-lg font-normal text-gray-600">{profile.email}</p>
        <p className="text-sm text-gray-500">Role: {profile.role}</p>

        {/* Buttons */}
        <div className="w-full flex justify-between mt-6 px-6 gap-20">
          <Link
            to="/update-password"
            className="w-[50%] relative py-2 rounded-md bg-transparent isolation-auto z-10 border-2 border-btn-yellow before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-btn-yellow before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-black hover:text-black"
          >
            Update Password
          </Link>
          <button
            onClick={handleDeleteProfile}
            className="w-[50%] relative py-2 rounded-md bg-transparent isolation-auto z-10 border-2 border-btn-yellow before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-btn-yellow before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-black hover:text-black"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
