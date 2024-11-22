import express from "express";
import { loginUser, registerUser, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/profile/update", isAuthenticated, updateProfile);

export default userRouter;