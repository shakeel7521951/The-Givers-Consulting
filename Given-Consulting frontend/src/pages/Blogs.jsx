import React from "react";
import BlogCard from "../component/Blog/BlogCard";
import { useGetBlogsQuery } from "../Redux/userRoutes/blogApi";

const BlogList = () => {
  // Fetching blogs using RTK Query
  const { data, isLoading, error } = useGetBlogsQuery();
  const blogs = Array.isArray(data) ? data : [];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 rounded-lg bg-cover bg-center text-white object-cover"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1436951314/photo/business-woman-talking-to-her-colleagues-during-a-meeting-in-a-boardroom.jpg?s=612x612&w=0&k=20&c=D3IZJj-KqWmsPC6GNcTeno_qrBr6DGubIEMvBw98YBE=')`,
        }}
      >
        <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center">
            OUR BLOGS
          </h1>
        </div>
      </div>

      {/* Blog List */}
      <div className="mx-auto p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Blog List</h2>

        {isLoading ? (
          <p className="text-center">Loading blogs...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error fetching blogs</p>
        ) : (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.length === 0 && (
              <p className="text-center">No blogs found</p>
            )}
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
