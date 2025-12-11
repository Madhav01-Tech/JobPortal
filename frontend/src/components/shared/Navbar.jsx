import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-white flex justify-between items-center 
      px-4 sm:px-8 md:px-16 py-4 shadow-md">

      {/* Logo */}
      <h1 className="text-xl sm:text-2xl font-bold">
        Job<span className="text-red-600">Portal</span>
      </h1>

      {/* Right Section */}
      <div className="hidden sm:flex gap-4 md:gap-6 items-center">
        
        <Link to="/"><span className="font-medium cursor-pointer">Home</span></Link>
        <Link to="/job"><span className="font-medium cursor-pointer">Jobs</span></Link>
        <Link to="/ss"><span className="font-medium cursor-pointer">Browser</span></Link>

        {!user ? (
          <>
            <Link to="/login">
              <Button className="bg-purple-500">Login</Button>
            </Link>
            <Link to="/signUp">
              <Button>SignUp</Button>
            </Link>
          </>
        ) : (
          <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>!found</AvatarFallback>
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="flex flex-col gap-4 items-center w-40">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <Link to="/profile">
                <Button variant="link">View Profile</Button>
              </Link>

              <Link to="/">
                <Button variant="link">Logout</Button>
              </Link>
            </PopoverContent>
          </Popover>
        )}
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="sm:hidden">
        <Popover>
          <PopoverTrigger>
            <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
              <span className="block w-full h-[3px] bg-black"></span>
              <span className="block w-full h-[3px] bg-black"></span>
              <span className="block w-full h-[3px] bg-black"></span>
            </div>
          </PopoverTrigger>

          <PopoverContent className="flex flex-col gap-4 w-48">
            <Link to="/"><span className="font-medium cursor-pointer">Home</span></Link>
            <Link to="/job"><span className="font-medium cursor-pointer">Jobs</span></Link>
            <Link to="/ss"><span className="font-medium cursor-pointer">Browser</span></Link>

            {!user ? (
              <>
                <Link to="/login"><Button className="bg-purple-500 w-full">Login</Button></Link>
                <Link to="/signUp"><Button className="w-full">SignUp</Button></Link>
              </>
            ) : (
              <>
                <Link to="/profile"><Button variant="link">View Profile</Button></Link>
                <Link to="/"><Button variant="link">Logout</Button></Link>
              </>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
