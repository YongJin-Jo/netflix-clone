import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useQuery } from 'react-query';
import { useMatch, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMovies } from '../../../api/api';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Banner, Overview, Title, Wrapper } from './styled.css';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies
  );
  return (
    <Wrapper>
      {isLoading ? (
        <Loder />
      ) : (
        <>
          <Banner bgPhoto={createImgPath(data?.results[0].poster_path || '')}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider data={data} />
          <AnimatePresence>
            {movieId ? <MovieListDetail data={data} /> : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};
