import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who liked
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who disliked
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: {
        public_id: { type: String, required: false },
        url: { type: String, required: true }
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    comments: [commentSchema], // Array of comments
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
