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
  width: 45vw;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 999;
`;

const Cover = styled.div<{ bgphoto: string }>`
  height: 400px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 1)),
    url(${props => props.bgphoto});
  position: relative;
`;

const PositionWarraper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  margin: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: 10px;
    height: 40px;
    background-color: white;
    border: none;
    cursor: pointer;
    &:hover {
      scale: 1.2;
    }
  }
`;

const PlayButton = styled.button`
  width: 100px;

  border-radius: 5px;
`;
const BookmarkButton = styled.button`
  width: 40px;
  border-radius: 50px;
`;
const UpButton = styled.button`
  width: 40px;
  border-radius: 50px;
`;
const DounButton = styled.button`
  width: 40px;
  border-radius: 50px;
`;

const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 10px;
`;

const DetailWarpper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Overview = styled.p`
  margin: 20px 0;
`;

export {
  Overlay,
  MovieInfo,
  Cover,
  Title,
  Overview,
  UpButton,
  DounButton,
  PlayButton,
  BookmarkButton,
  PositionWarraper,
  ButtonWrapper,
  DetailWarpper,
};
