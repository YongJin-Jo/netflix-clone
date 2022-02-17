import { useEffect, useState } from 'react';
import { fetchMovieList } from '.';

import { VideoListDetail } from '../../moleules/videoListDetail/VideoListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Wrapper } from './styled.css';
import { MainBanner } from '../../atoms/mainBanner/MainBanner';
import { fetchMovieById } from '../../../api/movies';
import { useSearchParams } from 'react-router-dom';
import { Loder } from '../../atoms/loder/Loder';

export const Home = () => {
  const [movieBanner, setMovieBanner] = useState<any>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const keyward = searchParams.get('keyward');
  const videoId = searchParams.get('videoId');
  const movieSubject = ['인기작품', '순위작품', '방영 중인 목록', '방영 예정'];

  const movieSliderList = fetchMovieList();

  return (
    <Wrapper>
      {movieSliderList[0].isLoading ? (
        <Loder />
      ) : (
        <MainBanner data={movieSliderList[0]} />
      )}
      {movieSliderList.map((item, index) => (
        <Slider key={index} data={item.data} topic={movieSubject[index]} />
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
