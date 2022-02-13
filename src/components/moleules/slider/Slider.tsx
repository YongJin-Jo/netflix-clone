import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { SliderlistItem } from '../../atoms/sliderListItem/SliderlistItem';
import { Row, SliderList } from './styled.css';

const rowVarinants = {
  hidden: { x: window.outerWidth + 10 },
  visible: { x: 0 },
  exit: { x: -window.outerWidth - 10 },
};

interface IPrpos {
  data: IGetMoviesResult | undefined;
}

export const Slider = ({ data }: IPrpos) => {
  const offset = 6;
  const [leving, setLeving] = useState(false);
  const [index, setIndex] = useState(0);
  const onClick = () => {
    if (data) {
      if (leving) return;
      toggleLeaving();
      const totalMovie = data.results.length;
      const MaxIndx = Math.floor(totalMovie / offset) - 1;
      setIndex(prev => (prev === MaxIndx ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => {
    setLeving(prev => !prev);
  };
  return (
    <SliderList>
      <button onClick={onClick}>Click</button>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          variants={rowVarinants}
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
    </SliderList>
  );
};
