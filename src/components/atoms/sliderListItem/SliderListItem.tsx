import { LayoutGroup } from 'framer-motion';
import React from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { animationStroe } from '../../../store/stroe';
import { MoiveDetail, Movies } from '../../../type/movieDefind';
import { Tv, TvDtail } from '../../../type/tvDefind';
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
  itemInfo: any;
}

export const SliderListItem = ({ itemInfo }: IPops) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDragging, setIsDragging] = useRecoilState(animationStroe);
  const keyward = searchParams.get('keyward');

  // 클릭 이벤트
  const onShowMovieInfo = (videoId: string) => {
    if (keyward) {
      return setSearchParams(
        createSearchParams({
          keyward,
          videoId,
        })
      );
    }
    setSearchParams(createSearchParams({ videoId: videoId }));
  };
  // Slider 드레그 이벤트 발생시 클릭할 수없게 만들기 위해 생성 한 함수
  const onDragState = () => {
    setIsDragging([{ isDragging: false }]);
  };
  return (
    <Box
      layoutId={itemInfo.id.toString()}
      onClick={() => {
        isDragging[0].isDragging
          ? onDragState()
          : onShowMovieInfo(itemInfo.id.toString());
      }}
      variants={boxVars}
      initial="nomal"
      whileHover="hover"
      transition={{ type: 'tween' }}
      bgpoto={
        itemInfo.poster_path != null
          ? createImgPath(itemInfo.poster_path, 'w500')
          : null
      }
    >
      <Info variants={infoVariants}>
        <h4>{itemInfo.title || itemInfo.name}</h4>
      </Info>
    </Box>
  );
};
