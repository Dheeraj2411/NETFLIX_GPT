import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviekey: null,
    nowPlayingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.nowPopularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.nowTopRatedMovie = action.payload;
    },
    addUpComingMovie: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
    addPopularTVSeries: (state, action) => {
      state.popularTVSerie = action.payload;
    },
    addTopRatedTVSeries: (state, action) => {
      state.TopRatedTVSerie = action.payload;
    },
    addMovieKey: (state, action) => {
      state.moviekey = action.payload;
    },
  },
});
export const {
  addMovies,
  addMovieKey,
  addPopularMovie,
  addTopRatedMovie,
  addUpComingMovie,
  addPopularTVSeries,
  addTopRatedTVSeries
} = movieSlice.actions;
export default movieSlice.reducer;
