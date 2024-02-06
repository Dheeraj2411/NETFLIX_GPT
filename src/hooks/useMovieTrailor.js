import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utilities/constants";
import { addMovieKey } from "../utilities/moviesSlice";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    videoData();
  }, []);
  // fetch trailor video url nad update reduxstore
  const videoData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();
    
    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    dispatch(addMovieKey(trailer));
    
  };
 
};

export default useMovieTrailor;
