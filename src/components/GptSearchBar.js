import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utilities/languageconstant";
import openai from "../utilities/openai";
import { options } from "../utilities/constants";
import { addGptMovies } from "../utilities/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const gptMovieDispatch = useDispatch();

  //  Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    
    // make an API call

    const gptQuery =
      "Act as a Movie Recommrndation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies,comma seperated like the example result given ahead.Example Result: Gadar,Sholy,Don,Golmaal,Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResult.choices) {
      return <h1>Result Not found</h1>;
    }
    // before split {golmaal,and so on ,....}
    const gptMovie = gptResult.choices[0]?.message?.content.split(",");
    // after split the movies are store in array[golmaal,orr so on,.....]

    const promiseTMDB = gptMovie.map((movie) => searchMovieTMDB(movie));
    const allPromise = await Promise.all(promiseTMDB);
    
    gptMovieDispatch(
      // obj in action  with multi key and value orr data
      addGptMovies({ movieResult: allPromise, movieNames: gptMovie })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[18%] flex justify-center mb-2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-xl mx-1"
      >
        <input
          ref={searchText}
          className="p-3 text-lg col-span-9 rounded-l-lg text-center outline-none rounded-r-none"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="text-white col-span-3 text-xl font-medium ml-1 py-4 px-4 bg-red-600 rounded-r-lg rounded-l-none"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
