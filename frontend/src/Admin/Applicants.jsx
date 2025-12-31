import React, { useEffect } from "react";
import ApplicantsTable from "./ApplicantsTable.jsx";
import { Application_API_Endpoint } from "@/Utils/constant.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setApplicants } from "../../redux/ApplicantsSlice.js";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const applicants = useSelector((state) => state.applicants.applicants);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(
          `${Application_API_Endpoint}/${params.id}/applicants`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setApplicants(res.data.job.applications));
          console.log(res.data.job.applications)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApplicants();
  }, [params.id, dispatch]);

  return (
    <div className="px-4 md:px-8 lg:px-12 py-10">
      <h1 className="font-bold text-2xl">
        Applicants ({applicants.length})
      </h1>

      <ApplicantsTable applicants={applicants} />
    </div>
  );
};

export default Applicants;
