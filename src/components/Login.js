import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utilities/validate";
import { auth } from "../utilities/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/121419166?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleBtn = () => {
    setIsSignIn(!isSignIn);
  };
  // console.log(isSignIn);

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 p-12 absolute bg-opacity-85 z-20 bg-black my-28 right-0 left-0 mx-auto text-white rounded-sm"
      >
        <h1 className="m-2 font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-2 w-full rounded-sm bg-black bg-opacity-10  outline-gray-500 outline outline-1 outline-offset-2"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-sm bg-black bg-opacity-10  outline-gray-500 outline outline-1 outline-offset-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-sm bg-black bg-opacity-10  outline-gray-500 outline outline-1 outline-offset-2 "
        />
        <p className="text-red-500 text-lg font-bold py-2">{errorMsg}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-4 bg-red-700 w-full rounded-sm hover:bg-red-800"
        >
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
