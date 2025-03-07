import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './userRoutes/userApi';
import userReducer from './userRoutes/userSlice';
import { blogSlice } from './userRoutes/blogApi';
import { commentSlice } from './userRoutes/commentApi';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [blogSlice.reducerPath]: blogSlice.reducer, // ✅ Now matches "blogApi"
    [commentSlice.reducerPath]: commentSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, blogSlice.middleware, commentSlice.middleware),
});

export default store;
