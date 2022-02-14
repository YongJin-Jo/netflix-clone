import { useQueries } from 'react-query';
import {
  fetchNationMovies,
  fetchPopularMovies,
  fetchTopLatestMovies,
  fetchUpcomingMovies,
} from '../../../api/movies';

function fetchMovieList() {
  const result = useQueries([
    { queryKey: ['movies', 'popular'], queryFn: fetchPopularMovies },
    { queryKey: ['movies', 'topLatest'], queryFn: fetchTopLatestMovies },
    { queryKey: ['movies', 'nowPlaying'], queryFn: fetchNationMovies },
    { queryKey: ['movies', 'upcoming'], queryFn: fetchUpcomingMovies },
  ]);

  return result;
}

export { fetchMovieList };
