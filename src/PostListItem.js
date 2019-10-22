import React from "react";
import T from "prop-types";
import "../src/styles.css";

const PostListItem = ({ post }) => {
  return (
    <div className="post-list-item">
      <div className="post-list-item__title">
        <h4>{post.title}</h4>
      </div>
      <hr />
      <div className="post-list-item__body">{post.body}</div>
      <span className="post-id">{post.id}</span>
    </div>
  );
};

PostListItem.propTypes = {
  post: T.shape({
    id: T.number.isRequired,
    title: T.string.isRequired,
    body: T.string.isRequired
  }).isRequired
};

export default PostListItem;
