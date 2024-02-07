import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
  const key = useSelector((store) => store.movies.moviekey);

  useMovieTrailor(movieId);

  return (
    <div className="overflow-hidden relative  ">
      <iframe
        className="relative w-screen aspect-video -mt-16 -z-10"
        src={
          "https://www.youtube.com/embed/" +
          key?.key +
          "?si=FFqLvjSAjluQt0SD&autoplay=1&mute=1&start=30&loop=1&controls=0&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
