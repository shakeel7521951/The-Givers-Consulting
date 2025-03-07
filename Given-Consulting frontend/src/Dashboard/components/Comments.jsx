import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  useGetAllCommentsQuery,
  useDeleteCommentMutation,
} from "../../Redux/userRoutes/commentApi";

const User = () => {
  // const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const { data, refetch } = useGetAllCommentsQuery();

  const [deleteComment, { isLoading: deleting }] = useDeleteCommentMutation();

  const comments = data?.comments || [];

  const handleDelete = async (id) => {
    try {
      await deleteComment(id).unwrap();
      toast.success("Comment deleted successfully!");
      refetch();
    } catch (err) {
      console.error("Error deleting user:", err);
      setError(err?.data?.message || "Failed to delete user");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-[#b8e3e9] min-h-[100vh] flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Comments Management</h2>
      {error && <p className="text-red-600 text-center my-2">{error}</p>}

      {comments.length === 0 ? (
        <p className="text-lg text-gray-600">No comments exist.</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-[#f3f4f6] border rounded-lg">
            <thead>
              <tr className="bg-[#afcdd2] text-left">
                <th className="p-3 text-nowrap">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Comment</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.commentId} className="border-b">
                  <td className="p-3 text-nowrap">{comment.user.name}</td>
                  <td className="p-3">{comment.user.email}</td>
                  <td className="p-3">{comment.text}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(comment.commentId)}
                      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700"
                      disabled={deleting}
                    >
                      {deleting ? "Deleting..." : <FaTrash />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default User;
