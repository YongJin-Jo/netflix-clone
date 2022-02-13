import { motion } from 'framer-motion';
import styled from 'styled-components';

const SliderList = styled.div`
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

export { SliderList, Row };
