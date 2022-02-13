import { motion } from 'framer-motion';
import styled from 'styled-components';

const Svg = styled(motion.svg)`
  color: white;
  height: 25px;
  z-index: 9999;
`;

const Wrapper = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  background-color: transparent;
  border: 1px solid ${props => props.theme.white.lighter};
  position: absolute;
  width: 210px;
  padding: 10px;
  padding-left: 30px;
  right: 100px;
  color: white;
  font-size: 16px;
`;

export { Svg, Wrapper, Input };
