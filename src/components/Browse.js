import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlaying();
  return (
    <div className="">
      <Header />
      {/*       
        Main Container
          -VideoBackground
          -Video Title
        Secondary Conatiner
          -MovieList * n
            -cards * n
     */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
