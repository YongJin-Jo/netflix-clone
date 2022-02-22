import { useQuery } from 'react-query';
import { fetchSearchMovies } from '../../../api/movies';
import { fetchSearchTv } from '../../../api/tv';
import { IGetMoviesResult } from '../../../type/movieDefind';

//function fetchSearchList(keyward: string | null) {
//  const result = useQueries<IGetMoviesResult[]>([
//    {
//      queryKey: ['search', 'movies'],
//      queryFn: async () => {
//        const data = fetchSearchMovies(keyward);
//        return data;
//      },
//    },
//    {
//      queryKey: ['search', 'tv'],
//      queryFn: async () => {
//        const data = fetchSearchTv(keyward);
//        return data;
//      },
//    },
//  ]);
//
//  return result;
//}

function fetchSearchMoviesList(keyward: string | null) {
  const { isLoading, data, refetch } = useQuery(['search', 'movies'], () => {
    const data = fetchSearchMovies(keyward);
    return data;
  });

  return { isLoading, data, refetch };
}

function fetchSearchTvList(keyward: string | null) {
  const { isLoading, data, refetch } = useQuery(
    ['search', 'tv'],
    () => {
      const data = fetchSearchTv(keyward);
      return data;
    },
    { refetchOnWindowFocus: true }
  );

  return { isLoading, data, refetch };
}

export { fetchSearchMoviesList, fetchSearchTvList };
