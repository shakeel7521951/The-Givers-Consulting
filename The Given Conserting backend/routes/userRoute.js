import {
  deleteMyProfile,
  forgotPassword,
  getAllUsers,
  getSingleUser,
  login,
  logout,
  myProfile,
  resetPassword,
  signup,
  updatePassword,
  updateProfile,
  verifyOTP,
  verifyUser,
  updateRole,
  deleteUser
} from "../controllers/userController.js";
import express from "express";
import { isUserLogedIn, isAdmin } from "../utils/auth.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/verify-user", verifyUser);
router.post("/login", login);
router.post("/logout", isUserLogedIn, logout);
router.get("/my-profile", isUserLogedIn, myProfile);
router.put("/update-profile", isUserLogedIn, updateProfile);
router.put("/update-password", isUserLogedIn, updatePassword);
router.put("/forgot-password", forgotPassword);
router.put("/verify-otp", verifyOTP);
router.put("/reset-password", resetPassword);
router.get("/get-single-user/:id", isUserLogedIn, getSingleUser);
router.get("/get-all-users", isUserLogedIn, getAllUsers);
router.delete("/delete-my-profile", isUserLogedIn, deleteMyProfile);

// Delte and Update user Role routes:
router.put("/update-role/:id", isUserLogedIn, isAdmin, updateRole);
router.delete("/delete-user/:id", isUserLogedIn, isAdmin, deleteUser);

export default router;
