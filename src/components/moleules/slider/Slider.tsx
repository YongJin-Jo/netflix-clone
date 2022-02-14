import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import React, { useState } from 'react';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { SliderlistItem } from '../../atoms/sliderListItem/SliderlistItem';
import { ButtonLeft, ButtonRight, Row, SliderWrapper } from './styled.css';

const rowNextVarinants = {
  hidden: { x: window.outerWidth + 100 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 100 },
};

interface IPrpos {
  data: IGetMoviesResult | undefined;
}

export const Slider = ({ data }: IPrpos) => {
  const offset = 6;
  const [leving, setLeving] = useState(false);
  const [index, setIndex] = useState(0);
  const onClick = (sliderIndex: number) => {
    if (data) {
      if (leving) return;
      toggleLeaving();
      const totalMovie = data.results.length;
      const MaxIndx = Math.floor(totalMovie / offset) - 1;
      setIndex(prev =>
        prev === MaxIndx
          ? prev + sliderIndex
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
          onClick(-1);
        }}
      >
        <span>&larr;</span>
      </ButtonLeft>
      <ButtonRight
        whileHover={{ opacity: 1, scale: 1.1 }}
        onClick={() => {
          onClick(1);
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
