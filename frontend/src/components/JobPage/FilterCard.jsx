import React from "react";

const filterData = [
  { label: "Location", options: ["Delhi", "Pune", "Bangalore", "Noida"] },
  { label: "Job Type", options: ["Full-time", "Part-time", "Contract"] },
  { label: "Experience Level", options: ["Entry", "Mid", "Senior"] },
  { label: "Industry", options: ["Tech", "Finance", "Healthcare"] },
  { label: "Role", options: ["Developer", "Manager", "Designer"] },
];

const FilterCard = () => {
  return (
    <div className="w-full p-5 bg-white rounded-xl shadow-md border">
      {filterData.map((filter) => (
        <div key={filter.label} className="mb-5">
          <h2 className="font-bold mb-2">{filter.label}</h2>

          {filter.options.map((option) => (
            <div key={option} className="flex items-center gap-2 mb-1">
              <input type="checkbox" id={option} name={option} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
