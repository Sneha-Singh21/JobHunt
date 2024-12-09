import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const applicationRouter = express.Router();

applicationRouter.get("/apply/:id", isAuthenticated, applyJob);
applicationRouter.get("/get", isAuthenticated, getAppliedJobs);
applicationRouter.get("/:id/applicants", isAuthenticated, getApplicants);
applicationRouter.put("/status/:id/update", isAuthenticated, updateStatus);

export default applicationRouter;
