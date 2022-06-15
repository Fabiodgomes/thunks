import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";
import postReducer from "./postPage/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    post: postReducer,
  },
});

export default store;
