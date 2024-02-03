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
  // console.log(isSignIn);

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-br bg-cover bg-center   from-black ">
        <img className="h-screen z-0 w-screen" src={bgLogo} alt="bg-logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 px-[4%] pt-[2%] absolute bg-opacity-85 z-20 bg-black my-[6%] right-0 left-0 mx-auto text-white rounded-sm"
      >
        <h1 className="m-1 font-bold text-3xl py-3">
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
          className=" pb-4 cursor-pointer hover:underline hover:text-gray-300"
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
