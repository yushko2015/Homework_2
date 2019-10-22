import React, { useState } from "react";
import T from "prop-types";
import "../src/styles.css";

const SearchInput = ({ onLiveSearch }) => {
  const [value, setInputValue] = useState("");
  const onChange = event => setInputValue(event.target.value);
  const onKeyUpHandler = e => {
    onLiveSearch(e.target.value);
  };

  return (
    <div className="search-input-container">
      <label htmlFor="inp" className="inp">
        <input
          type="text"
          id="inp"
          placeholder="&nbsp;"
          {...{ value }}
          onChange={onChange}
          onKeyUp={onKeyUpHandler}
        />
        <span className="label">Enter more than 3 symbol...</span>
        <svg width="120px" height="26px" viewBox="0 0 120 26">
          <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25" />
        </svg>
        <span className="border" />
      </label>
    </div>
  );
};

SearchInput.protoTypes = {
  onLiveSearch: T.func.isRequired
};

export default SearchInput;
