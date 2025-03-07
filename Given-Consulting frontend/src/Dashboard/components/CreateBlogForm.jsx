import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBlogMutation } from "../../Redux/userRoutes/blogApi"; // ✅ Import RTK Query mutation
import { toast } from "react-toastify";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the file
    }
  };

  const handleCreate = async () => {
    if (!formData.title || !formData.content || !selectedImage) {
      toast.error("Please fill all fields, including an image.", {
        autoClose: 1000,
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("image", selectedImage); // ✅ Append image file

    try {
      await createBlog(formDataToSend).unwrap(); // ✅ Calls RTK Query API
      toast.success("Blog created successfully!", { autoClose: 1000 });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Failed to create blog. Try again!", { autoClose: 1000 });
      setError(error?.data?.message || "Something went wrong.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center bg-[#b8e3e9] min-h-screen">
      <div className="bg-[#f3f4f6] p-6 rounded-md shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        <h2 className="text-lg font-semibold">Blog Title</h2>
        {error && <p className="text-red-500 text-center my-4">{error}</p>}
        <input
          type="text"
          className="w-full border p-2 mt-1 rounded-md focus:ring focus:ring-blue-300"
          placeholder="Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <h2 className="text-lg font-semibold mt-4">Blog Content</h2>
        <textarea
          className="w-full border p-2 mt-1 rounded-md h-32 resize-none focus:ring focus:ring-blue-300"
          placeholder="Blog content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          required
        ></textarea>

        <h2 className="text-lg font-semibold mt-4">Upload Blog Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 mt-1 rounded-md focus:ring focus:ring-blue-300"
          required
        />

        {/* Image Preview */}
        {selectedImage && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button
            onClick={handleCreate}
            className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full sm:w-auto bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
