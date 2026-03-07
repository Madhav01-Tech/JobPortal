import React from "react";
import LatestJobCards from "./LatestJobCards.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseGetAllJobs from "../../hooks/UseGetAllJobs.jsx";

const LatestJob = () => {
  const { user } = useSelector((store) => store.auth);
  const { jobs, searchQuery } = useSelector((store) => store.jobs);

  const navigate = useNavigate();
  const isLoading = UseGetAllJobs(user);

  // 🔹 FILTER LOGIC
  const filteredJobs = jobs?.filter((job) => {
    if (!searchQuery) return true;

    if (searchQuery.startsWith("{")) {
      const range = JSON.parse(searchQuery);
      return job.salary >= range.min && job.salary <= range.max;
    }

    return (
      job.location === searchQuery ||
      job.jobType === searchQuery
    );
  });

  if (isLoading) {
    return (
      <div className="w-full px-10 py-8 text-center text-gray-500">
        Loading job details...
      </div>
    );
  }

  return (
    <div className="w-full mt-0">
      <div className="text-3xl font-bold ml-30 mb-8">
        <span className="text-purple-500 ml-20">Latest & Top</span> Job Openings
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 my-5 ml-30 max-w-5xl mx-auto  gap-y-5">
        {!filteredJobs || filteredJobs.length === 0 ? (
          <span className="text-2xl font-bold">No Job Found</span>
        ) : (
          filteredJobs
            .slice(0, 3)
            .map((job) => (
              <LatestJobCards
                key={job._id}
                job={job}
                onClick={() => navigate(`/details/${job._id}`)}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default LatestJob;