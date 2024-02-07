import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";
import { netflixLogo, supported_languages } from "../utilities/constants";
import { toggleGptSearchView } from "../utilities/gptSlice";
import { changeLanguage } from "../utilities/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const showGpt = useSelector((store) => store.gptSlice.showGptSearch);

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

  const toggleHandle = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-50 px-6  w-full flex justify-between fixed bg-slate-900 bg-opacity-20">
      <img className="w-44" src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex py-3  mx-2">
          {showGpt && (
            <select
              className=" text-lg p-2 m-1 outline-none rounded-md"
              onChange={handleLanguage}
            >
              {supported_languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white mr-2 font-semibold rounded-lg bg-violet-500 px-4 "
            onClick={toggleHandle}
          >
            {showGpt ? "Home" : "Gpt Search"}
          </button>
          <img
            className="w-10 h-10 mx-4 mt-2 rounded-3xl content-center"
            src={user?.photoURL}
            alt="imgIcon"
          />
          <button
            onClick={handleClick}
            className="text-white mr-2 font-bold rounded-lg bg-slate-600 px-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
