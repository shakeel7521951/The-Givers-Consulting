import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">
          {blog.description.split(" ").slice(0, 30).join(" ")}
          {blog.description.split(" ").length > 30 ? " ..." : ""}
        </p>
        <Link
          to={`/blogs/${blog.id}`}
          state={{ blog }}
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
