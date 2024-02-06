import { useEffect } from "react";
import { options } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addPopularTVSeries } from "../utilities/moviesSlice";

const useTvSeriesPopular = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Series();
  }, []);
  const Series = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log(json);
    console.log("hhehe");
    dispatch(addPopularTVSeries(json.results
        ));
  };
};

export default useTvSeriesPopular;
