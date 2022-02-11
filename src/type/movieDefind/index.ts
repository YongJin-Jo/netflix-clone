interface Movies {
  backdrop_path: string;
  id: number;
  overview: string;
  title: string;
  poster_path: string;
}

interface IGetMoviesResult {
  date: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movies[];
  total_pages: string;
  total_results: string;
}

export type { Movies, IGetMoviesResult };
