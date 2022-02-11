function getMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=kr`
  ).then(response => response.json());
}

export { getMovies };
