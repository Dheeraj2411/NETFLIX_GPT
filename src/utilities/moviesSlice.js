import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    moviekey: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieKey: (state, action) => {
      state.moviekey = action.payload;
    },
  },
});
export const { addMovies, addMovieKey } = movieSlice.actions;
export default movieSlice.reducer;
