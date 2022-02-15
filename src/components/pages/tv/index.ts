import { useQueries } from 'react-query';

import {
  fetchAiringTodaytTv,
  fetchOnTheAirTv,
  fetchpPopularTv,
  fetchTopRatedTv,
} from '../../../api/tv';

function fetchTvList() {
  const result = useQueries([
    { queryKey: ['tvProgram', 'popular'], queryFn: fetchpPopularTv },
    { queryKey: ['tvProgram', 'topLatest'], queryFn: fetchTopRatedTv },
    { queryKey: ['tvProgram', 'nowPlaying'], queryFn: fetchOnTheAirTv },
    { queryKey: ['tvProgram', 'airingToday'], queryFn: fetchAiringTodaytTv },
  ]);

  return result;
}

export { fetchTvList };
