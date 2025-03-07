import express from "express";
import Blog from "../models/blogModel.js";
import { isUserLogedIn, isAdmin } from "../utils/auth.js"; // Ensure user is logged in
import { createComment, deleteComment, dislikeComment, getAllComments, likeComment } from "../controllers/commentController.js";

const router = express.Router();

// Get all comments:
router.get("/blogs/comments", isUserLogedIn, isAdmin, getAllComments);

// 📌 Add a Comment to a Blog
router.post("/blogs/:blogId/comments", isUserLogedIn, createComment);

// 📌 Like a Comment
router.post("/blogs/:blogId/comments/:commentId/like", isUserLogedIn, likeComment);

// 📌 Dislike a Comment
router.post("/blogs/:blogId/comments/:commentId/dislike", isUserLogedIn, dislikeComment);

// 📌 Delete a Comment

// router.delete("/blogs/:blogId/comments/:commentId", isUserLogedIn, deleteComment);

router.delete("/blogs/comments/:commentId", isUserLogedIn, isAdmin, deleteComment);

export default router;
