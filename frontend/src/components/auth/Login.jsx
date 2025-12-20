import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { User_API_Endpoint } from "../../Utils/constant.js";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/authSlice.js";


const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const changeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${User_API_Endpoint}/login`,
        inputData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Important for cookie
        }
      );

      console.log(response.data);

      dispatch(login(response.data.user));
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert( "Login failed!");
    }
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={loginSubmitHandler}
        className="w-[450px] border p-8 rounded-lg shadow-sm bg-white"
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={changeEventHandler}
          placeholder="Enter email"
          className="w-full border rounded-md p-2 mb-4 mt-1 outline-none"
        />

        <label className="font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={inputData.password}
          onChange={changeEventHandler}
          placeholder="Enter password"
          className="w-full border rounded-md p-2 mb-4 mt-1 outline-none"
        />

        <div className="flex items-center gap-6 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="student"
              onChange={changeEventHandler}
              defaultChecked
            />
            Student
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="recruiter"
              onChange={changeEventHandler}
            />
            Recruiter
          </label>
        </div>

        <button className="w-full bg-[#0d172a] text-white py-2 rounded-md hover:bg-black transition">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?
          <Link to="/signup" className="text-blue-600 ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
