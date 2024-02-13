import React from "react";
import { bgLogo } from "../utilities/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 md:w-full  ">
        <img
          className="h-screen object-cover md:object-cover md:w-full  "
          alt="bg logo"
          src={bgLogo}
        />
      </div>
      <div className=" bg-black bg-opacity-25 ">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
