import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { animationStroe } from '../../../store/stroe';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { SliderlistItem } from '../../atoms/sliderListItem/SliderlistItem';
import { ButtonLeft, ButtonRight, Row, SliderWrapper } from './styled.css';

const rowNextVarinants = {
  hidden: { x: window.outerWidth + 100 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 100 },
};

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface IPrpos {
  data: IGetMoviesResult | undefined;
}

export const Slider = ({ data }: IPrpos) => {
  const offset = 6;
  const swipeConfidenceThreshold = 10000;
  const [isDragging, setIsDragging] = useRecoilState(animationStroe);
  const [leving, setLeving] = useState(false);
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
      <ButtonLeft
        whileHover={{ opacity: 1, scale: 1.1 }}
        onClick={() => {
          paginate(-1);
        }}
      >
        <span>&larr;</span>
      </ButtonLeft>
      <ButtonRight
        whileHover={{ opacity: 1, scale: 1.1 }}
        onClick={() => {
          paginate(1);
        }}
      >
        <span>&#8594;</span>
      </ButtonRight>

      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
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
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
            return;
          }}
        >
          {data?.results
            .slice(1)
            .slice(offset * index, offset * index + offset)
            .map(item => (
              <SliderlistItem key={item.id} movieInfo={item} />
            ))}
        </Row>
      </AnimatePresence>
    </SliderWrapper>
  );
};
