import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utilities/constants";
import { addMovies } from "../utilities/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=2",
      options
    );
    const json = await data.json();
  
    dispatch(addMovies(json.results));
  };
};

export default useNowPlaying;
