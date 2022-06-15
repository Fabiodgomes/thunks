import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    startLoadingPost: (state) => {
      state.loading = true;
    },
    postFullyFetched: (state, action) => {
      // console.log("postFullyFetched action", action);
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { startLoadingPost, postFullyFetched } = postSlice.actions;

export default postSlice.reducer;
