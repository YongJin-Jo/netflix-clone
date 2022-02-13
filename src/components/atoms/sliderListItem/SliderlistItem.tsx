import { motion } from 'framer-motion';
import React from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { Movies } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';

const Box = styled(motion.div)<{ bgpoto: string }>`
  background-size: 100% 200px;
  background-image: url(${props => props.bgpoto});
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${props => props.theme.black.darker};
  height: 200px;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const boxVars = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -80,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: 'tween',
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: 'tween',
    },
  },
};
interface IPops {
  movieInfo: Movies;
}

export const SliderlistItem = ({ movieInfo }: IPops) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onClick = (movieId: string) => {
    setSearchParams(createSearchParams({ movieId: movieId }));
  };
  return (
    <Box
      layoutId={movieInfo.id.toString()}
      onClick={() => {
        onClick(movieInfo.id.toString());
      }}
      variants={boxVars}
      initial="nomal"
      whileHover="hover"
      transition={{ type: 'tween' }}
      bgpoto={createImgPath(movieInfo.poster_path, 'w500')}
    >
      <Info variants={infoVariants}>
        <h4>{movieInfo.title}</h4>
      </Info>
    </Box>
  );
};
