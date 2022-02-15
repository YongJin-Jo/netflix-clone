import { motion } from 'framer-motion';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  height: 220px;
  position: relative;
  margin: 30px 0;
`;
const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding: 10px;
`;

const ButtonLeft = styled(motion.button)`
  position: absolute;
  background-color: ${props => props.theme.white.lighter};
  z-index: 1;
  top: 90px;
  left: 20px;
  padding: 10px;
  border-radius: 50px;
  opacity: 0.5;
  font-size: 20px;
`;

const ButtonRight = styled(motion.button)`
  position: absolute;

  z-index: 1;
  padding: 10px;
  border-radius: 50px;
  top: 90px;
  right: 20px;
  opacity: 0.5;
  font-size: 20px;
`;

const Topic = styled.h3`
  font-size: 30px;
  margin-left: 10px;
`;

export { SliderWrapper, Row, Topic, ButtonLeft, ButtonRight };
