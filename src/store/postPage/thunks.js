import axios from "axios";
import { startLoadingPost, postFullyFetched } from "./slice";
import "../../config";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    console.log("am i getting an id?", id);

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    console.log(postResponse, commentsResponse);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
