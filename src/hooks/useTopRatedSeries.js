import  { useEffect } from "react";
import { options } from "../utilities/constants";

import { useDispatch } from "react-redux";
import { addTopRatedTVSeries } from "../utilities/moviesSlice";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    topRated();
  }, []);
  const topRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=3",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedTVSeries(json.results));
  };
};

export default useTopRatedSeries;
