import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-full px-10 py-8">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Title</h1>

        <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700">
          Apply Now
        </button>
      </div>

      {/* Positions Tags */}
      <div className="flex gap-3 mt-4">
        <span className="px-3 py-1 bg-red-200 text-red-600 rounded-md text-sm">
          12 Positions
        </span>

        <span className="px-3 py-1 bg-red-200 text-red-600 rounded-md text-sm">
          12 Positions
        </span>

        <span className="px-3 py-1 bg-red-200 text-red-600 rounded-md text-sm">
          12 Positions
        </span>
      </div>

      {/* Job Description Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Job Description
        </h2>

        <div className="mt-5 text-gray-800 leading-7">
          <p>
            <strong>Role:</strong> Frontend Developer
          </p>

          <p>
            <strong>Location:</strong> Hyderabad
          </p>

          <p>
            <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <p>
            <strong>Experience:</strong> 2 yrs
          </p>

          <p>
            <strong>Salary:</strong> 12 LPA
          </p>

          <p>
            <strong>Total Applicants:</strong> 4
          </p>

          <p>
            <strong>Posted Date:</strong> 29-12-2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
