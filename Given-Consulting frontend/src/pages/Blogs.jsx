import React from "react";
import BlogCard from "../component/Blog/BlogCard";

const blogs = [
  {
    id: 1,
    title: "Effective Communication in the Workplace",
    description: "Explore the importance of clear communication within teams and organizations. Learn how improving communication can foster collaboration, enhance productivity, and build a positive work culture. In today's fast-paced business world, communication is key to success. Whether you're working in small teams or large organizations, effective communication can break down barriers, minimize misunderstandings, and improve overall efficiency. By promoting open dialogue, active listening, and feedback, businesses can create a culture of transparency and trust. This blog highlights the importance of communication in various work settings and offers tips on how to enhance communication skills for better team dynamics.",
    image: "https://media.istockphoto.com/id/1454530428/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=eqJRlvK8XeBD69f-ZwVae6CxK7OJmLxTlwVsQhF8LcA=",
    date: "December 29, 2024",
  },
  {
    id: 2,
    title: "The Global Trade Landscape: Insights on Import and Export",
    description: "Dive into the world of international trade and understand the key factors influencing the import and export business. Learn about market trends, strategies for success, and global trade opportunities. Global trade has always been a significant driver of economic growth, and in the modern era, it continues to evolve with advancements in technology, shifting market trends, and international trade agreements. This blog examines the vital components of import and export businesses, providing insights into international logistics, the challenges of cross-border trade, and the role of global supply chains. We’ll also discuss best practices for businesses looking to expand into new markets, as well as strategies to stay competitive in a rapidly changing global economy.",
    image: "https://yurof.com/wp-content/uploads/2023/04/import-export-FI-1.jpeg",
    date: "December 28, 2024",
  },
  {
    id: 3,
    title: "Building a Reliable Online Presence: Website Hosting Explained",
    description: "A comprehensive guide to website hosting, including different types of hosting options, how to choose the right one for your business, and the importance of uptime and performance in ensuring a reliable online presence. Choosing the right website hosting provider is crucial for any business aiming to build a reliable and accessible online presence. From shared hosting to dedicated servers, there are various options available, each catering to different needs. This blog delves into the types of hosting services, explaining the pros and cons of each. Additionally, we highlight the significance of uptime, server performance, security features, and customer support in ensuring a seamless online experience. Whether you're a small business or an enterprise, this blog will guide you in selecting the best hosting solution for your website's success.",
    image: "https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg",
    date: "December 29, 2024",
  },
];


const BlogList = () => {
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
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center">OUR BLOGS</h1>
        </div>
      </div>

      {/* Blog List */}
      <div className=" mx-auto p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Blog List</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
