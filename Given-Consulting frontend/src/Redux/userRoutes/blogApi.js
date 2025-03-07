import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../baseurl";

export const blogSlice = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/api/v1`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.auth?.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
        credentials: "include",
    }),
    tagTypes: ["blogs"],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => ({
                url: "/blogs",
                method: "GET",
            }),
            providesTags: ["blogs"],
        }),

        // ✅ Fetch Blog Details by ID
        getBlogDetails: builder.query({
            query: (blogId) => ({
                url: `/blogs/${blogId}`,
                method: "GET",
            }),
            providesTags: ["blogs"],
        }),

        // ✅ Create a New Blog with Image Upload
        createBlog: builder.mutation({
            query: (formData) => ({
                url: "/blogs",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["blogs"],  // Invalidate cache to refresh blogs
        }),

        // ✅ Update Blog
        updateBlog: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/blogs/${id}`,
                method: "PUT",
                body: formData,
            }),
            invalidatesTags: ["blogs"],
        }),

        // ✅ Delete Blog
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/blogs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blogs"],
        }),


    }),
});

// Export hooks for using in components
export const {
    useGetBlogsQuery,
    useGetBlogDetailsQuery,
    useCreateBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
} = blogSlice;
