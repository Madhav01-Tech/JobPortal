import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label.jsx";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Noida", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1lakh to 5 lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
    dispatch(setSearchQuery(selectedValue));
    console.log(selectedValue);
  };

  useEffect(() => {
    if (selectedValue) {
      dispatch(setSearchQuery(selectedValue));
    }
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={data.filterType}>
            <h1 className="font-bold text-lg mt-4">
              {data.filterType}
            </h1>

            {data.array.map((item, idx) => {
              const itemId = `id-${index}-${idx}`;
              return (
                <div
                  key={itemId}
                  className="flex items-center space-x-2 my-2"
                >
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
