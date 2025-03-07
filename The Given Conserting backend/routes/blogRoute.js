import express from "express";
import { isUserLogedIn, isAdmin } from "../utils/auth.js"; // Ensure user is logged in
import { createBlog, deleteBlog, getBlogs, getSingleBlog, updateBlog } from "../controllers/blogController.js";

const router = express.Router();

// 📌 Create a Blog with Image Upload
router.post("/blogs", isUserLogedIn, isAdmin, createBlog);

// 📌 Get All Blogs
router.get("/blogs", getBlogs);

// 📌 Get a Single Blog:
router.get("/blogs/:id", getSingleBlog);

// 📌 Update Blog (with optional image upload)
router.put("/blogs/:id", isUserLogedIn, isAdmin, updateBlog);

// 📌 Delete a Blog
router.delete("/blogs/:id", isUserLogedIn, isAdmin, deleteBlog);

export default router;
