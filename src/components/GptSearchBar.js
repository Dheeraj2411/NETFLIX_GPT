import React from "react";
import { useSelector } from "react-redux";
// import { supported_languages } from "../utilities/constants";
import lang from "../utilities/languageconstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);


  return (
    <div className="pt-[18%] flex justify-center">
      <form
        onClick={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12 rounded-xl"
      >
        <input
          className="p-3 text-lg col-span-9 rounded-l-lg text-center outline-none rounded-r-none"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="text-white col-span-3 text-xl font-medium ml-1 py-4 px-4 bg-red-600 rounded-r-lg rounded-l-none">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
