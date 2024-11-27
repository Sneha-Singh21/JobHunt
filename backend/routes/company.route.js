import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const companyRouter = express.Router();

companyRouter.post("/register", isAuthenticated, registerCompany);
companyRouter.get("/get", isAuthenticated, getCompany);
companyRouter.get("/get/:id", isAuthenticated, getCompanyById);
companyRouter.put("/update/:id", isAuthenticated, updateCompany);

export default companyRouter;
