import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComing from "../hooks/useUpComing";
import useTvSeriesPopular from "../hooks/useTvSeriesPopular";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
// import { addPopularTVSerie } from "../utilities/moviesSlice";
const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComing();
  usePopularMovies();
  useTvSeriesPopular();
  useTopRatedSeries()

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
