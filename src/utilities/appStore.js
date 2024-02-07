import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSliceReducer from "./gptSlice";
import configSliceReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSlice: gptSliceReducer,
    config: configSliceReducer,
  },
});

export default appStore;
