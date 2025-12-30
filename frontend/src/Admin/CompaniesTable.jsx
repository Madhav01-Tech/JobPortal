import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useSelector } from "react-redux";
import UseGetAdminJobs from "../hooks/UseGetAdminJobs";

const AdminJobsTable = ({ search }) => {
  const user = useSelector((state) => state.auth.user);

  // fetch admin jobs
  UseGetAdminJobs(user);

  // get jobs from redux
  const jobs = useSelector(
    (state) => state.adminJobs.jobs
  ) || [];

  const normalizedSearch = (search || "").trim().toLowerCase();

  const filteredJobs =
    normalizedSearch === ""
      ? jobs
      : jobs.filter((job) => {
          const title = (job.title || "").toLowerCase();
          const location = (job.location || "").toLowerCase();
          const type = (job.jobType || "").toLowerCase();

          return (
            title.includes(normalizedSearch) ||
            location.includes(normalizedSearch) ||
            type.includes(normalizedSearch)
          );
        });

  return (
    <div>
      <Table>
        <TableCaption>Your jobs</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No jobs created yet.
              </TableCell>
            </TableRow>
          ) : (
            filteredJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.jobType || "—"}</TableCell>
                <TableCell>{job.location || "—"}</TableCell>
                <TableCell>{job.salary || "—"}</TableCell>
                <TableCell>{job.experience || "—"}</TableCell>
                <TableCell>
                  {job.createdAt
                    ? new Date(job.createdAt).toLocaleDateString()
                    : "—"}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
