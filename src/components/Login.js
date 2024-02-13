import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utilities/validate";
import { auth } from "../utilities/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";
import { avtarLogo, bgLogo } from "../utilities/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

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
            photoURL: avtarLogo,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // update redux store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
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
 

  return (
    <div className=" ">
      <Header />
      <div className="fixed h-full  ">
        <img
          className="h-screen w-screen object-cover "
          src={bgLogo}
          alt="bg-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-5/12 mt-[20%]  md:mt-[13%]  absolute  bg-opacity-75 z-20 bg-black right-0 left-0 p-3 md:mx-auto text-white rounded-lg"
      >
        <h1 className="m-1 font-bold text-2xl md:text-3xl py-3">
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
          className="pl-5 md:pl-0 pb-4 cursor-pointer hover:underline hover:text-gray-300"
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
