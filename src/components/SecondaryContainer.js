import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store?.movies);

  return (
    movie?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="z-index relative -mt-40">
          <MovieList title={"Now Playing"} movie={movie?.nowPlayingMovies} />
          <MovieList title={"Popular"} movie={movie?.nowPopularMovie} />
          <MovieList title={"Top Rated"} movie={movie?.nowTopRatedMovie} />
          <MovieList title={"UpComing"} movie={movie?.nowUpComingMovies} />
          <MovieList
            title={"Popular TV Series"}
            movie={movie?.popularTVSerie}
          />
          <MovieList
            title={"Top Rated TV Series"}
            movie={movie?.TopRatedTVSerie}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer