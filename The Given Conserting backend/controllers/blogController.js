import Blog from "../models/blogModel.js";
import { catchAsyncError } from "../middlewhare/catchAsyncError.js";
import { v2 as cloudinary } from "cloudinary";

export const getBlogs = catchAsyncError(async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "name");
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const getSingleBlog = catchAsyncError(async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("author", "name").populate("comments.user", "name");
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// export const createBlog = catchAsyncError(async (req, res) => {
//     try {
//         const { title, content, image } = req.body;

//         const newBlog = new Blog({ title, content, image, author: req.user._id });
//         await newBlog.save();

//         res.status(201).json({ message: "Blog created", blog: newBlog });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

export const createBlog = catchAsyncError(async (req, res) => {
    try {
        const { title, content } = req.body;
        const file = req.files?.image; // Get uploaded image

        // 🛑 Validate required fields
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required!" });
        }
        if (!file) {
            return res.status(400).json({ message: "Image is required!" });
        }

        // ✅ Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "Blog Images",
        });

        const imageData = {
            public_id: result.public_id,
            url: result.secure_url,
        };

        // ✅ Create and save the blog
        const newBlog = new Blog({
            title,
            content,
            image: imageData, // Store image in blog
            author: req.user._id,
        });

        await newBlog.save();

        res.status(201).json({
            message: "Blog created successfully!",
            blog: newBlog,
        });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: "Failed to create blog" });
    }
});


export const updateBlog = catchAsyncError(async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        // 🔒 Check if the user is an admin
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        }

        const { title, content } = req.body;
        const file = req.files?.image; // Get uploaded image if exists

        // ✅ Update title & content
        if (title) blog.title = title;
        if (content) blog.content = content;

        // ✅ Handle Image Upload
        if (file) {
            // 🗑 Delete old image from Cloudinary (if exists)
            if (blog.image?.public_id) {
                await cloudinary.uploader.destroy(blog.image.public_id);
            }

            // 📤 Upload new image
            const result = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: "Blog Images",
            });

            // Save new image
            blog.image = {
                public_id: result.public_id,
                url: result.secure_url,
            };
        }

        // ✅ Save the updated blog
        await blog.save();

        res.status(200).json({
            message: "Blog updated successfully!",
            blog,
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "Failed to update blog" });
    }
});


export const deleteBlog = catchAsyncError(async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });

        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await blog.deleteOne();
        res.status(200).json({ message: "Blog deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});