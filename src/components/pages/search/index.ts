import { useQueries } from 'react-query';
import { fetchSearchMovies } from '../../../api/movies';
import { fetchSearchTv } from '../../../api/tv';
import { IGetMoviesResult } from '../../../type/movieDefind';

function fetchSearchList(keyward: string | null) {
  const result = useQueries<IGetMoviesResult[]>([
    {
      queryKey: ['search', 'movies'],
      queryFn: async () => {
        const data = fetchSearchMovies(keyward);
        return data;
      },
    },
    {
      queryKey: ['search', 'tv'],
      queryFn: async () => {
        const data = fetchSearchTv(keyward);
        return data;
      },
    },
  ]);

  return result;
}

export { fetchSearchList };
