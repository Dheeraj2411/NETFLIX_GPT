import { useEffect } from "react";
import { options } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utilities/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    popular();
  }, []);
  const popular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular??page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
};

export default usePopularMovies;
