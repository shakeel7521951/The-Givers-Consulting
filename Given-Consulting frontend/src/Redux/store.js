import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './userRoutes/userApi';
import userReducer from './userRoutes/userSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // RTK Query slice
    user: userReducer, // User slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
});

export default store;
