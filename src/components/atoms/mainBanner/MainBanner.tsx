import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { UseQueryResult } from 'react-query';
import styled from 'styled-components';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';

const Banner = styled(motion.div)<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 25px;
  width: 50%;
`;

interface IProps {
  data: UseQueryResult<any | unknown>;
}

const BannerVars = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const MainBanner = ({ data }: IProps) => {
  return (
    <AnimatePresence>
      <Banner
        variants={BannerVars}
        initial="initial"
        animate="animate"
        exit="exit"
        bgPhoto={createImgPath(data.data.results[0].backdrop_path)}
      >
        <Title>{data.data.results[0].title || data.data.results[0].name}</Title>
        <Overview>{data.data.results[0].overview}</Overview>
      </Banner>
    </AnimatePresence>
  );
};
