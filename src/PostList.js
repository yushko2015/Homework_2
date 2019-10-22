import React from "react";
import T from "prop-types";
import "../src/styles.css";
import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostListItem {...{ post }} key={post.id} />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: T.array.isRequired
};

export default PostList;
