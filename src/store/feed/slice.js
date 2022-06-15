import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      state.loading = true;
      console.log("postsFetched action", action);
      // We will get 5 posts at a time so it's important we keep the posts
      // currently in the state and add the new incoming ones at the end of the array
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { startLoading, postsFetched } = feedSlice.actions;

export default feedSlice.reducer;

//can we put the state loading true in the postFetched? Example:
// postsFetched: (state, action) => {
// state.loading = true;
//   console.log("postsFetched action", action);
//   state.posts = [...state.posts, ...action.payload];
//   state.loading = false;
// },

// Question
//Try to call an action with a paramaterized selector?  function currying
