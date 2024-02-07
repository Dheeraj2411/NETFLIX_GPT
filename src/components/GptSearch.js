import React from "react";
import { bgLogo } from "../utilities/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10 w-full">
        <img className="w-screen" alt="bg logo" src={bgLogo} />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
