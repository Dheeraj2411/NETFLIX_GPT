import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
  const key = useSelector((store) => store.movies.moviekey);

  useMovieTrailor(movieId);

  return (
    <div className="overflow-hidden  ">
      <iframe
        className="z-0 w-screen aspect-video -mt-14 "
        src={
          "https://www.youtube.com/embed/" +
          key?.key +
          "?si=FFqLvjSAjluQt0SD&autoplay=1&mute=1&start=30&loop=2&controls=0&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
