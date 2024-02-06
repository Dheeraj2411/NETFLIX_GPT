import { useDispatch } from "react-redux";
import { options } from "../utilities/constants";
import { useEffect } from "react";
import { addUpComingMovie } from "../utilities/moviesSlice";

const useUpComing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    upComing();
  }, []);
  const upComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1,page=2",
      options
    );
    const json = await data.json();
    dispatch(addUpComingMovie(json?.results));
  };
};

export default useUpComing;
