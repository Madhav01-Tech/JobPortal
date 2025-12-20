import express from "express";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus
} from "../controllers/application.controllers.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// FIXED: Change GET → POST
router.route("/apply/:id").post(isAuthenticated, applyJob);// for applying to a job

router.route("/get").get(isAuthenticated, getAppliedJobs); // for user dashboard
router.route("/:id/applicants").get(isAuthenticated, getApplicants);// for recruiter dashboard 
router.route("/status/:id/update").post(isAuthenticated, updateStatus);// for recruiter to update application status

export default router;
