import { useEffect } from "react";
import { options } from "../utilities/constants";
import {  useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utilities/moviesSlice";




const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedPlayingMovies();
  }, []);
  const getTopRatedPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated??page=1",
      options
    );
    const json = await data.json();
    
    dispatch(addTopRatedMovie(json.results));
  };
};

export default useTopRatedMovies;


