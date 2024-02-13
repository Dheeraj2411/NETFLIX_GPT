import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
 
  return (
    <div className="pl-2 md:pl-4">
      <h1 className="z-50 text-2xl md:text-3xl m-1 md:m-4 py-1 px-4 md:px-7 inline-block rounded-lg text-white bg-black  bg-opacity-40 capitalize">{title}</h1>
      <div className="  overflow-y-scroll no-scrollbar cursor-pointer  scroll-smooth">
        <div className="flex  ">
          {movie?.map((path) => (
            <MovieCard key={path.id} poster_path={path.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
