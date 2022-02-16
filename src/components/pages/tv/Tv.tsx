import { LayoutGroup } from 'framer-motion';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTvList } from '.';
import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import { MainBanner } from '../../atoms/mainBanner/MainBanner';
import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Banner, Overview, Title, Wrapper } from './styled.css';

export const Tv = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const programSliderList = fetchTvList();
  const movieSubject = ['인기작품', '순위작품', '방영 중인 목록', '방영 목록'];
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  console.log(programSliderList);

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
      {movieId ? <MovieListDetail movieId={movieId} keyward={keyward} /> : null}
    </Wrapper>
  );
};
