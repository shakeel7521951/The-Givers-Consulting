import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from "../../Redux/userRoutes/blogApi"; // ✅ Import RTK Query Hooks
import { toast } from "react-toastify";

const BlogCards = () => {
  const [error, setError] = useState("");
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // ✅ Preview image before upload

  // Fetching blogs using RTK Query
  const { data } = useGetBlogsQuery();
  const blogs = Array.isArray(data) ? data : [];

  // ✅ RTK Query Mutations
  const [deleteBlog, { isLoading: isDeleting, isError: deleteError }] =
    useDeleteBlogMutation();
  const [updateBlog, { isLoading: isUpdating, isError: updateError }] =
    useUpdateBlogMutation();

  const handleEdit = (blog) => {
    setEditingBlog(blog._id);
    setFormData({
      image: blog.image?.url || "",
      title: blog.title,
      content: blog.content,
    });
    setPreviewImage(blog.image?.url || ""); // Show existing image
    setImageFile(null); // Reset file input
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id).unwrap(); // Ensure the mutation completes successfully
      toast.success("Blog deleted successfully!", { autoClose: 1000 });
    } catch (error) {
      console.error("Failed to delete:", error);
      if (error?.status === 403) {
        setError(error?.data?.message || "Unauthorized access");
      } else {
        setError("Failed to delete");
      }
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file)); // Show preview
    }
  };

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      await updateBlog({ id: editingBlog, formData: formDataToSend }).unwrap();
      toast.success("Blog updated successfully!", { autoClose: 1000 });
      setEditingBlog(null); // Close the edit modal after update
    } catch (error) {
      console.error("Failed to update:", error);
      if (error.status === 403) {
        setError(error?.data?.message);
      } else {
        setError("Error updating blog" || error?.data?.message);
      }
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleCancel = () => {
    setEditingBlog(null);
    setImageFile(null);
    setPreviewImage(null);
  };

  return (
    <div className="p-8 bg-[#b8e3e9]">
      <Link
        to="/dashboard/create-form"
        className="mb-4 inline-block bg-[#e1ff00] border border-[#e1ff00] text-black px-4 py-2 rounded-md"
      >
        Create Blog
      </Link>
      {error && <p className="text-red-500 text-center my-4">{error}</p>}

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={blog.image.url}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">
                  {" "}
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    weekday: "long", // "Monday"
                    year: "numeric", // "2025"
                    month: "long", // "February"
                    day: "numeric", // "10"
                  })}
                </p>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">
                  {blog.content.split(" ").slice(0, 30).join(" ")}
                  {blog.content.split(" ").length > 30 ? " ..." : ""}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-[#0a2281] text-white px-4 py-2 rounded-md"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    onClick={() => handleDelete(blog._id)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Form Modal */}
      {editingBlog !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#f3f4f6] p-6 rounded-md w-96 shadow-lg">
            {error && <p className="text-red-500 text-center my-4">{error}</p>}
            {updateError && (
              <p className="text-red-500 text-center my-4">{updateError}</p>
            )}
            <h2 className="text-lg font-semibold">Image URL</h2>
            {/* ✅ Image Upload Field */}
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-40 object-cover rounded mt-2"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="w-full border p-2 mt-2"
              onChange={handleFileChange}
            />

            <h2 className="text-lg font-semibold mt-4">Blog Title</h2>
            <input
              type="text"
              className="w-full border p-2 mt-1"
              placeholder="Blog Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <h2 className="text-lg font-semibold mt-4">Blog content</h2>
            <textarea
              className="w-full border p-2 mt-1"
              placeholder="Blog content"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            ></textarea>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleSave}
                className="bg-[#2563eb] text-white px-4 py-2 rounded-md"
                disabled={isUpdating}
              >
                {isUpdating ? "Updating..." : "Save"}
              </button>
              <button
                onClick={handleCancel}
                className="text-white px-4 py-2 rounded-md bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCards;
