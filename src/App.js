import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import DataProvider from "./DataProvider";
import MoreButton from "./MoreButton";
import SearchInput from "./SearchInput";
import Loader from "./Loader";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const onLoadMore = () => {
    if (posts.length < 100) {
      setLoading(true);
      setOffset(offset + limit);
      DataProvider.getPosts(limit, offset + limit).then(data => {
        setPosts([...posts, ...data]);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    DataProvider.getPosts(10, 0).then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const onLiveSearch = searchValue => {
    if (searchValue.length > 3) {
      setPosts(
        posts.filter(
          item => item.title.match(searchValue) || item.body.match(searchValue)
        )
      );
    }
    if (searchValue.length === 0) {
      DataProvider.getPosts(10, 0).then(data => {
        setPosts(data);
      });
    }
  };

  return (
    <div className="App">
      <SearchInput {...{ onLiveSearch }} />
      <PostList posts={posts} />
      <Loader {...{ loading }} />
      <MoreButton {...{ onLoadMore }} />
    </div>
  );
};

export default App;
