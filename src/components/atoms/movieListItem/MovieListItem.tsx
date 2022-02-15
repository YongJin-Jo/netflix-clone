import React from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { animationStroe } from '../../../store/stroe';
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

export const MovieListItem = ({ movieInfo }: IPops) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDragging, setIsDragging] = useRecoilState(animationStroe);

  // 클릭 이벤트
  const onShowMovieInfo = (movieId: string) => {
    setSearchParams(createSearchParams({ movieId: movieId }));
  };
  // Slider 드레그 이벤트 발생시 클릭할 수없게 만들기 위해 생성 한 함수
  const onDragState = () => {
    setIsDragging([{ isDragging: false }]);
  };
  return (
    <Box
      layoutId={movieInfo.id.toString()}
      onClick={() => {
        isDragging[0].isDragging
          ? onDragState()
          : onShowMovieInfo(movieInfo.id.toString());
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