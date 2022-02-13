function getMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=kr`
  ).then(response => response.json());
}

function fetchSearchMovies(keyword: string | null) {
  return fetch(`
  ${process.env.REACT_APP_BASE_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false&region=kr`).then(
    response => response.json()
  );
}

export { getMovies, fetchSearchMovies };
