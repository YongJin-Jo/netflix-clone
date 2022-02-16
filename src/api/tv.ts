// 최신 프로그램
function fetchLatestTv() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then(response => response.json());
}
// 오늘 방영할 프로그램
function fetchAiringTodaytTv() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}
// 현재 방영 되고 있는 프로그램
function fetchOnTheAirTv() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}
// 인기 프로그램
function fetchpPopularTv() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}
// 인기 순위 프로그램
function fetchTopRatedTv() {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}

function fetchTvById(id: string | null) {
  return fetch(
    `${process.env.REACT_APP_BASE_PATH}/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  ).then(response => response.json());
}

export {
  fetchAiringTodaytTv,
  fetchpPopularTv,
  fetchTopRatedTv,
  fetchOnTheAirTv,
  fetchLatestTv,
  fetchTvById,
};
