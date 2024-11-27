import express from "express";
import { loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/profile/update", isAuthenticated, updateProfile);
userRouter.get("/logout", logoutUser);

export default userRouter;