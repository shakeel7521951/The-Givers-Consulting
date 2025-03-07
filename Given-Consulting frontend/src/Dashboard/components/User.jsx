import React, { useState, useEffect } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateRoleMutation,
} from "../../Redux/userRoutes/userApi";

const User = () => {
  // const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const { data, refetch } = useGetAllUsersQuery();

  const [updateRole, { isLoading: updating }] = useUpdateRoleMutation();
  const [deleteUser, { isLoading: deleting }] = useDeleteUserMutation();

  const users = data?.users || [];

  const handleRoleChange = async (id, newRole) => {
    try {
      await updateRole({ id, role: newRole }).unwrap();
      toast.success("User role updated successfully!");
      refetch();
    } catch (err) {
      console.error("Error updating role:", err);
      setError(err?.data?.message || "Failed to update role");
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      toast.success("User deleted successfully!");
      refetch();
    } catch (err) {
      console.error("Error deleting user:", err);
      setError(err?.data?.message || "Failed to delete user");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-[#b8e3e9] min-h-[100vh] flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2>
      {error && <p className="text-red-600 text-center my-2">{error}</p>}

      {users.length === 0 ? (
        <p className="text-lg text-gray-600">No users exist.</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-[#f3f4f6] border rounded-lg">
            <thead>
              <tr className="bg-[#afcdd2] text-left">
                <th className="p-3 text-nowrap">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Update Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="p-3 text-nowrap">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <div className="relative inline-block">
                      <button className="bg-[#0a2281] text-white px-4 py-1 rounded-md flex items-center">
                        <FaUser className="mr-2" />
                        {user.role}
                      </button>
                      <select
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(user._id)}
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
