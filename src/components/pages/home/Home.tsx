import { fetchMovieList } from '.';

import { VideoListDetail } from '../../moleules/videoListDetail/VideoListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Wrapper } from './styled.css';
import { MainBanner } from '../../atoms/mainBanner/MainBanner';
import { fetchMovieById } from '../../../api/movies';
import { useSearchParams } from 'react-router-dom';
import { Loder } from '../../atoms/loder/Loder';
import { LayoutGroup } from 'framer-motion';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSliderList = fetchMovieList();

  const keyward = searchParams.get('keyward');
  const videoId = searchParams.get('videoId');
  const movieSubject = ['인기작품', '순위작품', '방영 중인 목록', '방영 예정'];

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
      {videoId ? (
        <VideoListDetail
          videoId={videoId}
          keyward={keyward}
          fetchFuntion={fetchMovieById}
        />
      ) : null}
    </Wrapper>
  );
};
