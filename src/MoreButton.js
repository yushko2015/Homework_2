import React from "react";
import T from "prop-types";
import "../src/styles.css";

const MoreButton = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className="load-more-btn">
      Load More
    </button>
  );
};

MoreButton.propTypes = {
  onLoadMore: T.func.isRequired
};

export default MoreButton;
