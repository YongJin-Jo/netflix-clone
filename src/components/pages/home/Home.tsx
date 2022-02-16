import { LayoutGroup } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieList } from '.';
import { Movies } from '../../../type/movieDefind';

import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import { MainBanner } from '../../atoms/mainBanner/MainBanner';
import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Banner, Overview, Title, Wrapper } from './styled.css';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSliderList = fetchMovieList();
  const movieSubject = ['인기작품', '최신작품', '국가별 작품', '개봉예정 작품'];
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  console.log(movieSliderList);

  return (
    <Wrapper>
      {movieSliderList[0].isLoading ? (
        <Loder />
      ) : (
        <MainBanner data={movieSliderList[0]} />
      )}
      {movieSliderList.map((item, index) => (
        <LayoutGroup id={index.toString()}>
          <Slider key={index} data={item.data} topic={movieSubject[index]} />
        </LayoutGroup>
      ))}
      {movieId ? <MovieListDetail movieId={movieId} keyward={keyward} /> : null}
    </Wrapper>
  );
};
