import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleBtn = () => {
    setIsSignIn(!isSignIn);
  };
  console.log(isSignIn);
  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-br  from-black ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg"
          alt="bg-logo"
        />
      </div>
      <form className="w-4/12 p-12 absolute bg-opacity-85 z-20 bg-black my-28 right-0 left-0 mx-auto text-white rounded-sm">
        <h1 className="m-2 font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-2 w-full rounded-sm bg-black bg-opacity-10  outline-gray-500 outline outline-1 outline-offset-2"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-sm bg-black bg-opacity-10  outline-gray-500 outline outline-1 outline-offset-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-sm bg-black bg-opacity-10  outline-gray-500 outline outline-1 outline-offset-2 "
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-sm hover:bg-red-800">
          Sign In
        </button>
        <button className="p-2 my-4  w-full rounded-sm hover:underline hover:text-gray-300">
          Forgot Password ?
        </button>
        <p
          className="cursor-pointer hover:underline hover:text-gray-300"
          onClick={toggleBtn}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered! Sign Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
