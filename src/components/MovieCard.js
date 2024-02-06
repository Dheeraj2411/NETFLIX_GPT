import React from "react";
import { movie_poster_URL } from "../utilities/constants";

const MovieCard = ({ movie }) => {
  
  return (
    <div>
      <div className="w-52   ">
        <img
          className=" px-1 w-full  rounded-lg  "
          alt="title of movie"
          src={movie_poster_URL + movie?.poster_path}
        />
      </div>
    </div>
  );
};

export default MovieCard;
