import Blog from "../models/blogModel.js";
import { catchAsyncError } from "../middlewhare/catchAsyncError.js";


export const getAllComments = catchAsyncError(async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate("comments.user", "name email") // Get comment user details
            .select("title comments"); // Select only title and comments

        const comments = blogs.flatMap(blog =>
            blog.comments.map(comment => ({
                commentId: comment._id,
                text: comment.text,
                user: comment.user,
                blogTitle: blog.title,
                createdAt: comment.createdAt,
            }))
        );

        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});



export const createComment = catchAsyncError(async (req, res) => {
    try {
        const { text } = req.body;
        const { blogId } = req.params;

        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        const newComment = { user: req.user._id, text };
        blog.comments.push(newComment);

        await blog.save();
        res.status(201).json({ message: "Comment added", blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const likeComment = catchAsyncError(async (req, res) => {
    try {
        const { blogId, commentId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        const comment = blog.comments.id(commentId);
        if (!comment) return res.status(404).json({ message: "Comment not found" });

        if (!comment.likes.includes(req.user._id)) {
            comment.likes.push(req.user._id);
            comment.dislikes = comment.dislikes.filter(id => id.toString() !== req.user._id.toString()); // Remove dislike if exists
        }

        await blog.save();
        res.status(200).json({ message: "Comment liked", blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const dislikeComment = catchAsyncError(async (req, res) => {
    try {
        const { blogId, commentId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        const comment = blog.comments.id(commentId);
        if (!comment) return res.status(404).json({ message: "Comment not found" });

        if (!comment.dislikes.includes(req.user._id)) {
            comment.dislikes.push(req.user._id);
            comment.likes = comment.likes.filter(id => id.toString() !== req.user._id.toString()); // Remove like if exists
        }

        await blog.save();
        res.status(200).json({ message: "Comment disliked", blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const deleteComment = catchAsyncError(async (req, res) => {
    try {
        const { commentId } = req.params;

        const blog = await Blog.findOne({ "comments._id": commentId });
        if (!blog) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Remove the comment from the blog's comments array
        blog.comments = blog.comments.filter(comment => comment._id.toString() !== commentId);
        await blog.save();

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});


// export const deleteComment = (async (req, res) => {
//     try {
//         const { blogId, commentId } = req.params;
//         const blog = await Blog.findById(blogId);
//         if (!blog) return res.status(404).json({ message: "Blog not found" });

//         // Find the comment
//         const comment = blog.comments.find((c) => c._id.toString() === commentId);
//         if (!comment) return res.status(404).json({ message: "Comment not found" });

//         // Check if the user is the author of the comment or the blog
//         if (comment.user.toString() !== req.user._id.toString() && blog.author.toString() !== req.user._id.toString()) {
//             return res.status(403).json({ message: "Unauthorized" });
//         }

//         // Remove the comment using $pull
//         await Blog.findByIdAndUpdate(blogId, {
//             $pull: { comments: { _id: commentId } },
//         });

//         res.status(200).json({ message: "Comment deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });