import React from "react";
import LatestJobCards from "./LatestJobCards.jsx";
import { motion } from "framer-motion";
const LatestJob = () => {
  let jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-full   ">
      <div className="text-3xl font-bold  ml-30 mb-8 ">
        <span className="text-purple-500">Latest & Top</span> Job Openings
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 my-5  ml-30 max-w-5xl mx-auto hover:scale-1.5 "
     >
        {jobs.slice(0,6).map((item, index) => <LatestJobCards key={index} />)}
      </div>
    </div>
  );
};

export default LatestJob;
