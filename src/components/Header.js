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
    <div className=" z-50 px-6  w-full flex  flex-col md:flex-row justify-between absolute bg-black   ">
      <img
        className="md:w-44 w-36 md:mx-0 mx-auto"
        src={netflixLogo}
        alt="logo"
      />
      {user && (
        <div className="flex py-3   md:mx-0 mx-auto ">
          {showGpt && (
            <select
              className="md:h-auto text-lg md:p-1 mx-8 md:mx-2 px-2 outline-none rounded-md"
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
            className="text-white h-10 md:h-auto md:mr-2 font-semibold rounded-lg bg-violet-500 mx-5 md:px-4 px-3 mt-1"
            onClick={toggleHandle}
          >
            {showGpt ? "Home" : "Gpt Search"}
          </button>
          <img
            className="ml-5 w-10 h-10 mx-4 mt-2 rounded-3xl content-center"
            src={user?.photoURL}
            alt="imgIcon"
          />
          <button
            onClick={handleClick}
            className="text-white md:h-auto ml-5 mr-2 font-bold rounded-lg bg-slate-600 px-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
