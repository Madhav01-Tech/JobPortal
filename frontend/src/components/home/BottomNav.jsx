import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

export default function BottomNav() {
  return (
    <footer className="w-full bg-white-600 text-white py-6 mt-10 border-t border-gray-300 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-pink-400 transition text-gray-900"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 transition  text-gray-900"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-600 transition  text-gray-900"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-500 transition  text-gray-900"><FaLinkedin /></a>
          <a href="#" className="hover:text-red-600 transition  text-gray-900"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-400 transition  text-gray-900"><FaGithub /></a>
        </div>

        <div className="text-center text-sm text-gray-900">
          <p className=" text-gray-900">© 2025 YourWebsiteName. All rights reserved.</p>
          <p className="mt-1  text-gray-900">Built with ❤️ to give you the best experience.</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300 mt-2">
          <a href="#" className=" transition  text-gray-900">About Us</a>
          <a href="#" className=" transition  text-gray-900">Contact</a>
          <a href="#" className=" transition  text-gray-900">Privacy Policy</a>
          <a href="#" className=" transition  text-gray-900">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
