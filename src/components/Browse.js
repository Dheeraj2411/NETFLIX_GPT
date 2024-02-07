import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComing from "../hooks/useUpComing";
import useTvSeriesPopular from "../hooks/useTvSeriesPopular";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const selector = useSelector((store) => store.gptSlice.showGptSearch);
  
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComing();
  usePopularMovies();
  useTvSeriesPopular();
  useTopRatedSeries();

  return (
    <div className="">
      <Header />
      {selector ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
