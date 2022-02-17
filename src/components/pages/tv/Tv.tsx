import { LayoutGroup } from 'framer-motion';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTvList } from '.';
import { fetchTvById } from '../../../api/tv';
import { Loder } from '../../atoms/loder/Loder';
import { MainBanner } from '../../atoms/mainBanner/MainBanner';
import { Slider } from '../../moleules/slider/Slider';
import { VideoListDetail } from '../../moleules/videoListDetail/VideoListDetail';
import { Wrapper } from './styled.css';

export const Tv = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const programSliderList = fetchTvList();
  const movieSubject = ['인기작품', '순위작품', '방영 중인 목록', '방영 목록'];
  const keyward = searchParams.get('keyward');
  const videoId = searchParams.get('videoId');

  return (
    <Wrapper>
      {programSliderList[0].isLoading ? (
        <Loder />
      ) : (
        <MainBanner data={programSliderList[0]} />
      )}
      {programSliderList.map((item, index) => (
        <LayoutGroup id={index.toString()}>
          <Slider key={index} data={item.data} topic={movieSubject[index]} />
        </LayoutGroup>
      ))}
      {videoId ? (
        <VideoListDetail
          videoId={videoId}
          keyward={keyward}
          fetchFuntion={fetchTvById}
        />
      ) : null}
    </Wrapper>
  );
};
