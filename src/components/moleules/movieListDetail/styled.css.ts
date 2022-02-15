import { motion } from 'framer-motion';
import styled from 'styled-components';

const Overlay = styled(motion.div)`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MovieInfo = styled(motion.div)`
  position: absolute;
  background-color: ${props => props.theme.black.darker};
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  z-index: 999;
`;

const Cover = styled.div<{ bgphoto: string }>`
  height: 300px;
  background-size: 100%;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 1)),
    url(${props => props.bgphoto});
  position: relative;
`;

const Title = styled.h3`
  font-size: 32px;
  position: absolute;
  bottom: 0;
  margin: 10px;
`;
const Overview = styled.p`
  margin: 20px;
`;

export { Overlay, MovieInfo, Cover, Title, Overview };
