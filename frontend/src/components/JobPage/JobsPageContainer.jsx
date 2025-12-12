import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
;

const JobsPageContainer = () => {
  const { jobs } = useSelector((store) => store.jobs);
  return (
    <div className="w-full flex gap-10 px-4 md:px-10 py-10">
      
      
      <div className="hidden md:block w-1/4">
        <FilterCard />
      </div>

      {/* Jobs Grid */}
      <div className="w-full">
        {jobs.length === 0 ? (
          <div className="text-center text-3xl font-bold">No Jobs Found</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {jobs.map((job ,i) => (
              <Job key={i }  job={job}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPageContainer;
