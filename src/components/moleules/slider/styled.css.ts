import { motion } from 'framer-motion';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  top: -100px;
`;
const Row = styled(motion.div)`
  display: grid;
  position: absolute;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding: 10px;
`;

const ButtonLeft = styled(motion.button)`
  background-color: ${props => props.theme.white.lighter};
  position: absolute;
  z-index: 999;
  top: 90px;
  left: 20px;
  padding: 10px;
  border-radius: 50px;
  opacity: 0.5;
  font-size: 20px;
`;

const ButtonRight = styled(motion.button)`
  position: absolute;
  z-index: 999;
  padding: 10px;
  border-radius: 50px;
  top: 90px;
  right: 20px;
  opacity: 0.5;
  font-size: 20px;
`;

export { SliderWrapper, Row, ButtonLeft, ButtonRight };
