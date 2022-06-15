import React, { useEffect } from "react";
// import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedPosts } from "../../store/feed/selectors";
import { fetchPosts } from "../../store/feed/thunks";
import "./Homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div style={{ marginLeft: 20 }}>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span className="tags">
                {post.tags.map((tag) => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
}
