class DataProvider {
  async getPosts(limit, offset) {
    return await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`
    ).then(resp => {
      return resp.json();
    });
  }
}

export default new DataProvider();
