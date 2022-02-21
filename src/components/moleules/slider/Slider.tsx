import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { animationStroe } from '../../../store/stroe';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { SliderListItem } from '../../atoms/sliderListItem/SliderListItem';
import {
  ButtonLeft,
  ButtonRight,
  Row,
  SliderWrapper,
  Topic,
} from './styled.css';

interface IPrpos {
  data: IGetMoviesResult | undefined;
  topic: string;
}

// 슬라이드 애니매이션 구현 객체
const rowNextVarinants = {
  hidden: (directionRight: any) => ({ x: directionRight ? 2000 : -2000 }),
  visible: { x: 0 },
  exit: (directionRight: any) => ({ x: directionRight ? -2000 : 2000 }),
};

// drag 비교값
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slider = ({ data, topic }: IPrpos) => {
  const offset = 6;
  const swipeConfidenceThreshold = 10000;
  const [isDragging, setIsDragging] = useRecoilState(animationStroe);
  const [leving, setLeving] = useState(false);
  const [directionRight, setDirectionRight] = useState(true);
  const [index, setIndex] = useState(0);
  const paginate = (sliderIndex: number) => {
    if (data) {
      if (leving) return;
      toggleLeaving();
      const totalMovie = data.results.length;
      const MaxIndx = Math.floor(totalMovie / offset) - 1;
      setIndex(prev =>
        prev === MaxIndx
          ? 0
          : prev + sliderIndex < 0
          ? MaxIndx
          : prev + sliderIndex
      );
    }
  };
  const toggleLeaving = () => {
    setLeving(prev => !prev);
  };

  return (
    <SliderWrapper>
      <Topic>{topic}</Topic>
      <ButtonLeft
        whileHover={{ opacity: 1, scale: 1.1 }}
        onClick={() => {
          setDirectionRight(false);
          paginate(-1);
        }}
      >
        <span>&larr;</span>
      </ButtonLeft>
      <ButtonRight
        whileHover={{ opacity: 1, scale: 1.1 }}
        onClick={() => {
          setDirectionRight(true);
          paginate(1);
        }}
      >
        <span>&#8594;</span>
      </ButtonRight>
      <AnimatePresence
        initial={false}
        onExitComplete={toggleLeaving}
        custom={directionRight}
      >
        <Row
          custom={directionRight}
          variants={rowNextVarinants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'tween', duration: 1 }}
          key={index}
          drag="x"
          dragElastic={1}
          onDragStart={() => {
            setIsDragging([{ isDragging: true }]);
          }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              setDirectionRight(true);
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              setDirectionRight(false);
              paginate(-1);
            }
            return;
          }}
        >
          {data?.results
            .slice(1)
            .slice(offset * index, offset * index + offset)
            .map(item => (
              <SliderListItem key={item.id} itemInfo={item} />
            ))}
        </Row>
      </AnimatePresence>
    </SliderWrapper>
  );
};
