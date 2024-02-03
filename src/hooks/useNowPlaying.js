import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utilities/constants";
import { addMovies } from "../utilities/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addMovies(json.results));
  };
};

export default useNowPlaying;
