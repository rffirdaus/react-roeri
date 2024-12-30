import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/postsSlice"; // Adjust the path if necessary

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});