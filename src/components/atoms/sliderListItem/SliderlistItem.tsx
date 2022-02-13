import React from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Movies } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';
import { Box, Info } from './styled.css';

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
