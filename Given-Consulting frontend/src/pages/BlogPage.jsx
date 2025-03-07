import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const BlogPage = () => {
  const location = useLocation();
  const { blog } = location.state || {};

  const [comments, setComments] = useState([]); // State to store comments
  const [commentInput, setCommentInput] = useState(""); // State to store user input

  if (!blog) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-gray-500">Blog not found. Please go back and try again.</p>
        <Link to="/blogs" className="text-blue-500 hover:text-blue-700 underline">
          Back to Blog List
        </Link>
      </div>
    );
  }

  // Handle form submission for adding a comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      const newComment = {
        username: "User", // You can replace this with dynamic user data
        date: new Date().toLocaleString(), // Current date and time
        comment: commentInput,
      };
      setComments([...comments, newComment]); // Add new comment to comments array
      setCommentInput(""); // Clear input field
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
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
      <h1 className="text-xl sm:text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-8">{blog.description}</p>

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
        {comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center gap-10 justify-start text-sm text-gray-500 mb-2">
                  <span className="font-semibold">{comment.username}</span>
                  <span>{comment.date}</span>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
