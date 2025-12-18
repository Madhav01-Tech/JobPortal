import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Application_API_Endpoint } from "../../Utils/constant.js";
import { setJobs } from "../../../redux/jobSlice.js";

const CardDetails = () => {
  const { jobs } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const { id } = useParams();

  const job = jobs?.find((j) => j._id === id) || null;

  const initialApplied = Boolean(
    job?.applications?.some((application) => {
      if (!application) return false;
      // application may be an ObjectId string, an object with `applicant`, or a populated object
      if (typeof application === "string") return application === user?._id;
      if (typeof application === "object") {
        if (application.applicant) return String(application.applicant) === String(user?._id);
        return String(application) === String(user?._id);
      }
      return false;
    })
  );

  const [isApplied, setIsApplied] = useState(initialApplied);

  useEffect(() => {
    setIsApplied(initialApplied);
  }, [job, user?._id]);


  const applyJobHandler = async () => {
    if (!job) return;

    try {
      const response = await axios.post(
        `${Application_API_Endpoint}/apply/${job._id}`,
        {},
        { withCredentials: true }
      );

      const { data } = response;

      if (data.success) {
        alert("Applied Successfully");

        //  Update apply state
        setIsApplied(true);

        //  Update Redux jobs array so UI updates instantly
        const updatedJobs = jobs.map((j) =>
          j._id === job._id
            ? {
                ...j,
                applications: [
                  ...j.applications,
                  { applicant: user._id } // add new applied user
                ]
              }
            : j
        );

        dispatch(setJobs(updatedJobs));
      } else {
        alert(data.message || "Failed to apply");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Error applying for job");
    }
  };


  if (!job) {
    return (
      <div className="w-full px-10 py-8">
        <p className="text-center text-gray-500">
          Job not found or still loading.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-10 py-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{job.title}</h1>

        <button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`px-6 py-2 rounded-lg text-white font-semibold 
            ${isApplied 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-purple-600 hover:bg-purple-700"}`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </button>
      </div>

      {/* Requirements */}
      <div className="flex gap-3 mt-4">
        {(job.requirements || []).map((req, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-red-200 text-red-600 rounded-md text-sm"
          >
            {req}
          </span>
        ))}
      </div>

      {/* Job Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2">Job Description</h2>

        <div className="mt-5 text-gray-800 leading-7">
          <p><strong>Role:</strong> {job.title}</p>
          <p><strong>Positions:</strong> {job.position}</p>
          <p><strong>Location:</strong> {job.location || "Not specified"}</p>
          <p><strong>Description:</strong> {job.description || "No description"}</p>
          <p><strong>Experience:</strong> {job.experienceLevel || "N/A"}</p>
          <p><strong>Salary:</strong> {job.salary || "N/A"}</p>
          <p><strong>Total Applicants:</strong> {job.applications?.length || 0}</p>
          <p>
            <strong>Posted Date:</strong>{" "}
            {job.createdAt
              ? new Date(job.createdAt).toLocaleDateString()
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
