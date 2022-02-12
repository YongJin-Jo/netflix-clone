import { motion, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IGetMoviesResult, Movies } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MovieInfo = styled(motion.div)`
  position: absolute;
  background-color: ${props => props.theme.black.darker};
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
`;

const Cover = styled.div<{ bgphoto: string }>`
  height: 300px;
  background-size: 100%;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 1)),
    url(${props => props.bgphoto});
  position: relative;
`;

const Title = styled.h3`
  font-size: 32px;
  position: absolute;
`;
const Overview = styled.p``;

interface IProps {
  data: IGetMoviesResult | undefined;
}

export const MovieListDetail = ({ data }: IProps) => {
  const parms = useParams();
  const { scrollY } = useViewportScroll();
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  const movieDetailData = (parms.movieId &&
    data?.results.find(
      movie => movie.id.toString() === parms.movieId
    )) as Movies;

  return (
    <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick}>
      <MovieInfo
        layoutId={parms.movieId}
        style={{
          top: scrollY.get(),
        }}
      >
        <Cover
          bgphoto={createImgPath(
            movieDetailData ? movieDetailData.backdrop_path : '',
            'w500'
          )}
        >
          <Title>{movieDetailData ? movieDetailData.title : ''}</Title>
        </Cover>

        <Overview>{movieDetailData ? movieDetailData.overview : ''}</Overview>
      </MovieInfo>
    </Overlay>
  );
};
