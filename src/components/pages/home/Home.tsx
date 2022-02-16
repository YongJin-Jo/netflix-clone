import { LayoutGroup } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieList } from '.';
import { fetchMovieById } from '../../../api/movies';

import { Loder } from '../../atoms/loder/Loder';
import { MainBanner } from '../../atoms/mainBanner/MainBanner';
import { VideoListDetail } from '../../moleules/videoListDetail/VideoListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Wrapper } from './styled.css';

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
      {movieId ? (
        <VideoListDetail
          movieId={movieId}
          keyward={keyward}
          fetchFuntion={fetchMovieById}
        />
      ) : null}
    </Wrapper>
  );
};
