import React from "react";
import T from "prop-types";
import "../src/styles.css";

const Loader = ({ loading }) => {
  return (
    <div
      className={
        loading ? "wrapper loader-visible" : "wrapper loader-invisible"
      }
    >
      <svg
        width="88px"
        height="88px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="ar-loader"
      >
        <rect x="0" y="0" width="100" height="100" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#EFF2F5"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#0080FF"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="1.5s"
            repeatCount="indefinite"
            from="0"
            to="502"
          />
          <animate
            attributeName="stroke-dasharray"
            dur="1.5"
            repeatCount="indefinite"
            values="150.6 100.4;1 250;150.6 100.4"
          />
        </circle>
      </svg>
    </div>
  );
};

Loader.propTypes = {
  loading: T.bool.isRequired
};

export default Loader;
