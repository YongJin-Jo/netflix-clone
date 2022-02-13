import { motion } from 'framer-motion';
import styled from 'styled-components';

const Svg = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${props => props.theme.red};
  cursor: pointer;
  path {
    stroke-width: 6px;
  }
`;

export { Svg };
