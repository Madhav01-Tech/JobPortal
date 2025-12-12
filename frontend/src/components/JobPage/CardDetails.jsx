import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const { jobs } = useSelector((store) => store.jobs);
  const { id } = useParams();

  const job = jobs?.find((j) => j._id === id) || null;

  if (!job) {
    return (
      <div className="w-full px-10 py-8">
        <p className="text-center text-gray-500">Job not found or still loading.</p>
      </div>
    );
  }

  return (
    <div className="w-full px-10 py-8">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{job.title}</h1>

        <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">
          Apply Now
        </button>
      </div>

      {/* Positions / Tags */}
      <div className="flex gap-3 mt-4">
        {(job.requirements || []).map((req, idx) => (
          <span key={idx} className="px-3 py-1 bg-red-200 text-red-600 rounded-md text-sm">
            {req}
          </span>
        ))}
      </div>

      {/* Job Description Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2">Job Description</h2>

        <div className="mt-5 text-gray-800 leading-7">
          <p>
            <strong>Role:</strong> { job.title }
          </p>

          <p>
            <strong>Location:</strong> {job.location || "Not specified"}
          </p>

          <p>
            <strong>Description:</strong> {job.description || "No description"}
          </p>

          <p>
            <strong>Experience:</strong> {job.experienceLevel || "N/A"}
          </p>

          <p>
            <strong>Salary:</strong> {job.salary ? `${job.salary}` : "N/A"}
          </p>

          <p>
            <strong>Total Applicants:</strong> {job.applications?.length || 0}
          </p>

          <p>
            <strong>Posted Date:</strong> {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
