import React from "react";
import { movie_poster_URL } from "../utilities/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="">
      <div className="w-40 md:w-52 m-1 py-3 ">
        <img
          className=" px-1 object-cover rounded-lg  h-full  "
          alt="title of movie"
          src={movie_poster_URL + poster_path}
        />
      </div>
    </div>
  );
};

export default MovieCard;
