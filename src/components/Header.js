import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";
import { netflixLogo } from "../utilities/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     
      if (user) {
        // User is signed in, see docs for a list of available properties

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // after sign and create ac sign in
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="scroll-m-1  px-6 py-2  z-50 w-full flex justify-between fixed">
      <img className="w-44" src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2 z-50">
          <img
            className="w-10 h-10 rounded-3xl content-center"
            src={user?.photoURL}
            alt="imgIcon"
          />
          <button
            onClick={handleClick}
            className="text-white font-bold ml-1 pb-4 text-center"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
