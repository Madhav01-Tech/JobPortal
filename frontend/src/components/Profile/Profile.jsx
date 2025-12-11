import React, { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import UpdateProfileModal from "./UpdateProfileModal.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";   

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  //  Redirect to home if page is refreshed and user becomes null
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  if (!user) return null; // Prevent crash before redirect

  return (
    <div className="px-4 md:px-10 lg:px-16 py-10">

      {/* Profile Card */}
      <div className="border rounded-xl p-6 md:p-8 bg-white shadow-sm relative">

        {/* Edit Icon */}
        <button
          onClick={() => setOpen(true)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
        >
          <FiEdit size={20} />
        </button>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* User Image */}
          <img
            src={user.profile?.profilePhoto}
            alt="Profile"
            className="w-20 h-20 rounded-lg object-cover border"
          />

          {/* User Info */}
          <div className="w-full">
            <h2 className="text-xl font-semibold">{user.fullName}</h2>

            <p className="text-gray-600 mt-2 leading-relaxed">
              {user.profile?.bio || "This user has not added a bio yet."}
            </p>

            {/* Email */}
            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <FaEnvelope />
              <span className="break-all">{user.email}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 mt-2 text-gray-700">
              <FaPhone />
              <span>{user.phoneNumber}</span>
            </div>

            {/* Skills */}
            {/* Skills */}
<div className="mt-5">
  <h3 className="font-semibold">Skills</h3>

  <div className="flex flex-wrap gap-4 mt-2">

    {(
      Array.isArray(user?.profile?.skills)
        ? user.profile.skills
        : JSON.parse(user?.profile?.skills || "[]")
    ).map((skill, i) => (
      <span
        key={i}
        className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm"
      >
        {skill}
      </span>
    ))}

  </div>
</div>


            {/* Resume */}
            <div className="mt-5">
              <h3 className="font-semibold">Resume</h3>
              <a  href={user.profile?.resume} className="text-blue-600 break-all hover:underline">
                {user.profile?.resumeOriginalName || "No resume uploaded."}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Applied Jobs Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Applied Jobs</h2>

        <div className="border py-4 sm:py-6 px-4 sm:px-8 rounded-lg text-gray-600 overflow-x-auto">
          <Table className="min-w-[600px]">
            <TableCaption>A list of your recent jobs</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Result</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {[1, 2, 3, 4].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-gray-600">2/8/25</TableCell>
                  <TableCell className="font-medium text-gray-600">Frontend</TableCell>
                  <TableCell className="font-medium text-gray-600">Microsoft</TableCell>

                  <TableCell className="text-right font-medium text-gray-600">
                    <span className="border bg-gray-600 text-white rounded-lg px-3 py-1">
                      Selected
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <UpdateProfileModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
