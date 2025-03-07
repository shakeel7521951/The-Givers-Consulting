import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBlogDetailsQuery } from "../Redux/userRoutes/blogApi";
import {
  useCreateCommentMutation,
  useLikeCommentMutation,
  useDislikeCommentMutation,
} from "../Redux/userRoutes/commentApi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { toast } from "react-toastify";

const BlogPage = () => {
  const { id } = useParams(); // ✅ Get blog ID from URL
  const { data: blog, refetch } = useGetBlogDetailsQuery(id);

  const [createComment] = useCreateCommentMutation(); // ✅ Initialize mutation
  const [likeComment] = useLikeCommentMutation();
  const [dislikeComment] = useDislikeCommentMutation();

  const [commentInput, setCommentInput] = useState(""); // State to store user input

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-gray-500">
          Blog not found. Please go back and try again.
        </p>
        <Link
          to="/blogs"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Back to Blog List
        </Link>
      </div>
    );
  }

  // ✅ Submit Comment to Backend
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      try {
        await createComment({ blogId: id, text: commentInput }).unwrap(); // ✅ Send to API
        toast.success("Your comment is added!", { autoClose: 1000 });

        setCommentInput(""); // Clear input field
        refetch();
      } catch (error) {
        console.error("Failed to post comment:", error);
      }
    }
  };

  // ✅ Handle Like without full reload
  const handleLike = async (blogId, commentId) => {
    try {
      await likeComment({ blogId, commentId }).unwrap();
      toast.success("You liked this comment!", { autoClose: 1000 });

      // ✅ Update state instead of refetching
      refetch(); // Fetch latest data **without** page reload
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  // ✅ Handle Dislike without full reload
  const handleDislike = async (blogId, commentId) => {
    try {
      await dislikeComment({ blogId, commentId }).unwrap();
      toast.error("You disliked this comment!", { autoClose: 1000 });

      // ✅ Update state instead of refetching
      refetch();
    } catch (error) {
      console.error("Error disliking comment:", error);
    }
  };

  return (
    <div className=" mx-auto sm:p-4">
      <Link
        to="/blogs"
        className="text-blue-500 hover:text-blue-700 underline mb-4 inline-block"
      >
        Back to Blog List
      </Link>
      <img
        src={blog.image.url}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-500 text-sm mb-2">
        {" "}
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          weekday: "long", // "Monday"
          year: "numeric", // "2025"
          month: "long", // "February"
          day: "numeric", // "10"
        })}
      </p>
      <h1 className="text-xl sm:text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-8">{blog.content}</p>

      {/* Leave a Comment Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
        <form onSubmit={handleAddComment} className="mb-4">
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            rows="4"
            placeholder="Write your comment here..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg mt-2 hover:bg-blue-600"
          >
            Post Comment
          </button>
        </form>

        {/* Display Comments */}
        <h3 className="text-md sm:text-xl font-semibold mb-2">Comments</h3>
        {blog.comments.length > 0 ? (
          <ul className="space-y-2">
            {blog.comments.map((comment, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center gap-10 justify-start text-sm text-gray-500 mb-2">
                  <span className="font-semibold">{comment.user?.name}</span>
                  <span>
                    {" "}
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                      weekday: "long", // "Monday"
                      year: "numeric", // "2025"
                      month: "long", // "February"
                      day: "numeric", // "10"
                    })}
                  </span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
                <p className="flex items-center gap-6 my-2 text-gray-600 text-sm sm:text-lg">
                  {/* Like Button */}
                  <span className="flex items-center gap-2 bg-green-100 hover:cursor-pointer px-3 py-1 rounded-full shadow-md">
                    <button
                      onClick={() => handleLike(blog._id, comment._id)}
                      className="text-green-600"
                    >
                      <AiOutlineLike size={22} className="text-green-600" />
                    </button>
                    <span className="text-green-800 font-semibold">
                      {comment.likes.length}
                    </span>
                  </span>

                  {/* Dislike Button */}
                  <span className="flex items-center gap-2 bg-red-100 hover:cursor-pointer px-3 py-1 rounded-full shadow-md">
                    <button
                      onClick={() => handleDislike(blog._id, comment._id)}
                      className="text-red-600"
                    >
                      <AiOutlineDislike size={22} className="text-red-600" />
                    </button>
                    <span className="text-red-800 font-semibold">
                      {comment.dislikes.length}
                    </span>
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
