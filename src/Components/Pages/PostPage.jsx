import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/postPage/thunks";
import { selectPostAndComments } from "../../store/postPage/selectors";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fullPosts = useSelector(selectPostAndComments());
  console.log(fullPosts);

  useEffect(() => {
    console.log("do i have an id in the pagE?", id);
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return <div>ID: </div>;
}
