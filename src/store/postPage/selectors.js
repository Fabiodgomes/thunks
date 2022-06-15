export const selectPostAndComments = () => (reduxState) => {
  return reduxState.post.loading
    ? null
    : {
        post: reduxState.post.post,
        comments: reduxState.post.comments,
      };
};
