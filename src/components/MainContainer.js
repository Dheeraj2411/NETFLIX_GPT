import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    if (!movies) return;

    const mainMovie = movies[1];
    const { original_title, overview, id } = mainMovie;

    return (
      <div className="md:pt-20 sm:pt:[18%] pt-[27%] ">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    );
};

export default MainContainer;
