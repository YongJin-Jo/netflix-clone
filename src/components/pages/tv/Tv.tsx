import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTvList } from '.';
import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Banner, Wrapper } from './styled.css';

export const Tv = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const programSliderList = fetchTvList();
  const movieSubject = ['인기작품', '순위작품', '방영 중인 목록', '방영 목록'];
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  console.log(programSliderList);

  return (
    <Wrapper>
      <Banner bgPhoto={''}></Banner>
      {programSliderList.map((item, index) => (
        <Slider key={index} data={item.data} topic={movieSubject[index]} />
      ))}
      {movieId ? <MovieListDetail movieId={movieId} keyward={keyward} /> : null}
    </Wrapper>
  );
};
