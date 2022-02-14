//국가별 영화 목록
function fetchNationMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=kr`
  ).then(response => response.json());
}

//영화 정보
function fetchMovieDetail(movieId: number | undefined) {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
}

//최신 영화
function fetchLatestMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then(response => response.json());
}
//인기 영화
function fetchPopularMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}
// 순위 영화
function fetchTopLatestMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then(response => response.json());
}
// 개봉 예정 영화
function fetchUpcomingMovies() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then(response => response.json());
}
// 영화 검색
function fetchSearchMovies(keyword: string | null) {
  return fetch(`
  ${process.env.REACT_APP_BASE_PATH}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false&region=kr`).then(
    response => response.json()
  );
}

export {
  fetchNationMovies,
  fetchSearchMovies,
  fetchLatestMovies,
  fetchPopularMovies,
  fetchTopLatestMovies,
  fetchUpcomingMovies,
  fetchMovieDetail,
};
