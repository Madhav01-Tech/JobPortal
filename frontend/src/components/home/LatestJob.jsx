import React from "react";
import LatestJobCards from "./LatestJobCards.jsx";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import UseGetAllJobs from "../../hooks/UseGetAllJobs.jsx";
const LatestJob = () => {
 const { jobs } = useSelector((store) => store.jobs);
  UseGetAllJobs();
  return (
    <div className="w-full   ">
      <div className="text-3xl font-bold  ml-30 mb-8 ">
        <span className="text-purple-500">Latest & Top</span> Job Openings
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 my-5  ml-30 max-w-5xl mx-auto hover:scale-1.5 "
     >

        {(!jobs || jobs.length <= 0) ? (
          <span className="text-2xl font-bold">No Job Found</span>
        ) : (
          jobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJob;
