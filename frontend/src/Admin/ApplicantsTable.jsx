import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { MoreHorizontal } from "lucide-react";

const ApplicantsTable = ({ applicants = [] }) => {
  return (
    <div className="mt-4">
      <Table>
        <TableCaption>Applicants List</TableCaption>

        {/* HEADER */}
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* BODY (THIS WAS MISSING) */}
        <TableBody>
          {applicants.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No applicants found
              </TableCell>
            </TableRow>
          ) : (
            applicants.map((app) => (
              <TableRow key={app._id}>
                <TableCell>{app.applicant?.
fullName}</TableCell>
                <TableCell>{app.applicant?.email}</TableCell>
                <TableCell>{app.applicant?.phoneNumber}</TableCell>

                <TableCell>
                  {app.applicant?.resume ? (
                    <a
                      href={app.applicant.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      View
                    </a>
                  ) : (
                    "N/A"
                  )}
                </TableCell>

                <TableCell>
                  {new Date(app.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <MoreHorizontal className="cursor-pointer" />
                    </PopoverTrigger>

                    <PopoverContent className="w-32">
                      <div className="flex flex-col gap-2">
                        <span className="cursor-pointer hover:text-green-600">
                          Accept
                        </span>
                        <span className="cursor-pointer hover:text-red-600">
                          Reject
                        </span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
