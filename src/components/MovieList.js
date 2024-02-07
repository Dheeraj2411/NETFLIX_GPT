import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
 
  return (
    <div className=" pl-4">
      <h1 className="z-50 text-3xl py-5 px-7 text-white ">{title}</h1>
      <div className="  overflow-y-scroll no-scrollbar cursor-pointer  scroll-smooth">
        <div className="flex  ">
          {movie?.map((path) => (
            <MovieCard key={path.id} movie={path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
