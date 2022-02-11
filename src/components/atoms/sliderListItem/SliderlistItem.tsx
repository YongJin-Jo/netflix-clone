import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Movies } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';

const Box = styled(motion.div)<{ bgpoto: string }>`
  background-image: url(${props => props.bgpoto});
  background-position: center center;
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
`;

interface IPops {
  movieInfo: Movies;
}

export const SliderlistItem = ({ movieInfo }: IPops) => {
  return <Box bgpoto={createImgPath(movieInfo.poster_path, 'w200')}></Box>;
};
