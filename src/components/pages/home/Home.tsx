import { useSearchParams } from 'react-router-dom';
import { fetchMovieList } from '.';
import { Movies } from '../../../type/movieDefind';

import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Banner, Overview, Title, Wrapper } from './styled.css';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSliderList = fetchMovieList();
  const movieSubject = ['인기작품', '최신작품', '국가별 작품', '개봉예정 작품'];
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  return (
    <Wrapper>
      <Banner bgPhoto={''}></Banner>
      {movieSliderList.map((item, index) => (
        <Slider key={index} data={item.data} topic={movieSubject[index]} />
      ))}
      {movieId ? <MovieListDetail movieId={movieId} keyward={keyward} /> : null}
    </Wrapper>
  );
};
