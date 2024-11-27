import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobsById, postJob } from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.post("/post", isAuthenticated, postJob);
jobRouter.get("/getalljobs", isAuthenticated, getAllJobs);
jobRouter.get("/getadminjobs", isAuthenticated, getAdminJobs);
jobRouter.get("/get/:id", isAuthenticated, getJobsById);

export default jobRouter;