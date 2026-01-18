import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { jobs, searchQuery } = useSelector((store) => store.jobs);
  const [filterJobs, setFilterJobs] = useState(jobs);

  useEffect(() => {
    const filteredJobs = jobs.filter((job) => {
      // Salary filter if searchQuery is a JSON
      if (searchQuery?.startsWith("{")) {
        try {
          const salaryRange = JSON.parse(searchQuery);
          if (
            job.salary < salaryRange.min ||
            job.salary > salaryRange.max
          ) return false;
        } catch (err) {
          console.error("Invalid salary JSON", err);
        }
      }

      // Text search filter (title, description, location)
      if (
        searchQuery &&
        !searchQuery.startsWith("{") &&
        !(
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        return false;
      }

      return true; // include job if it passes filters
    });

    setFilterJobs(filteredJobs);
  }, [jobs, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className="flex gap-5">
        <div className="w-1/5">
          <FilterCard />
        </div>

        {filterJobs.length <= 0 ? (
          <span>Job Not Found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-4">
              {filterJobs.map((job) => (
                <div key={job?._id}>
                  <Job job={job} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
