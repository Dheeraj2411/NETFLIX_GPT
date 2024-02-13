import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResult } = useSelector((store) => store?.gptSlice);
  if (!movieResult) return null;
  return (
    <div className="">
      {movieResult.map((movie, index) => (
        <MovieList key={index} movie={movie} title={movieNames[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion