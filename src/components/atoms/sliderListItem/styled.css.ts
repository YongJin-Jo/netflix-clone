import { motion } from 'framer-motion';
import { url } from 'inspector';
import styled from 'styled-components';

const Box = styled(motion.div)<{ bgphoto: string | null }>`
  background-size: 100% 200px;
  background-image: ${props =>
    props.bgphoto != null
      ? `url(${props.bgphoto})`
      : `url(${props.theme.defalutImg})`};
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

export { Box, Info };
