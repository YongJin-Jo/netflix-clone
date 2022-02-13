import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  createSearchParams,
  matchPath,
  useMatch,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { fetchSearchMovies } from '../../../api/api';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { Loder } from '../../atoms/loder/Loder';
import { SliderlistItem } from '../../atoms/sliderListItem/SliderlistItem';
import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { BigTitle, Container, Item, ItemList, Wrapper } from './styled.css';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'serchMovies'],
    async () => {
      const data = await fetchSearchMovies(keyward);
      return data;
    }
  );

  const onClick = (movieId: string) => {
    setSearchParams(
      createSearchParams({
        keyward: keyward as string,
        movieId: movieId,
      })
    );
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loder />
      ) : (
        <Container>
          <BigTitle>SearchList:{keyward}</BigTitle>
          <ItemList>
            {data?.results.map(item => (
              <Item
                key={item.id}
                onClick={() => {
                  onClick(item.id.toString());
                }}
              >
                {item.title}
              </Item>
            ))}
          </ItemList>
          <AnimatePresence>
            {movieId ? <MovieListDetail data={data} /> : null}
          </AnimatePresence>
        </Container>
      )}
    </Wrapper>
  );
};
