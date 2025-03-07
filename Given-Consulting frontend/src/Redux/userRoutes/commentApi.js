import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../baseurl";

export const commentSlice = createApi({
    reducerPath: "commentApi",
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
    tagTypes: ["comments"],

    endpoints: (builder) => ({
        // ✅ Create a Comment
        createComment: builder.mutation({
            query: ({ blogId, text }) => ({
                url: `/blogs/${blogId}/comments`,
                method: "POST",
                body: { text },
            }),
            invalidatesTags: ["comments"],
        }),

        // ✅ Like a Comment
        likeComment: builder.mutation({
            query: ({ blogId, commentId }) => ({
                url: `/blogs/${blogId}/comments/${commentId}/like`,
                method: "POST",
            }),
            invalidatesTags: ["comments"], // Refresh comments after like
        }),

        // ✅ Dislike a Comment
        dislikeComment: builder.mutation({
            query: ({ blogId, commentId }) => ({
                url: `/blogs/${blogId}/comments/${commentId}/dislike`,
                method: "POST",
            }),
            invalidatesTags: ["comments"], // Refresh comments after dislike
        }),

        // ✅ Get All Comments with Blog Name (Admin)
        getAllComments: builder.query({
            query: () => ({
                url: "/blogs/comments",
                method: "GET",
            }),
            providesTags: ["comments"],
        }),

        // ✅ Delete a Comment (Admin)
        deleteComment: builder.mutation({
            query: (commentId) => ({
                url: `/blogs/comments/${commentId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["comments"],
        }),


    }),
});

export const { useCreateCommentMutation, useLikeCommentMutation, useDislikeCommentMutation, useGetAllCommentsQuery, useDeleteCommentMutation } = commentSlice;
