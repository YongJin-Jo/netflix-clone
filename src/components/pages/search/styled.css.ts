import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 100vh;
`;

const BigTitle = styled.h3`
  padding: 20px;
  margin-top: 50px;
  font-size: 48px;
`;

const ItemList = styled.ul`
  gap: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const SearchFrom = styled.form`
  position: relative;
`;

const FromWrapper = styled.div`
  margin-top: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 600px;
  height: 50px;
  transform-origin: right center;
  background-color: transparent;
  border: 1px solid ${props => props.theme.white.lighter};
  color: white;
  padding-left: 70px;
  font-size: 24px;
  border-radius: 50px;
`;

const Svg = styled.svg`
  cursor: pointer;
  position: absolute;
  width: 30px;
  top: 10px;
  left: 25px;
`;

export {
  Svg,
  Wrapper,
  FromWrapper,
  Container,
  BigTitle,
  ItemList,
  Input,
  SearchFrom,
};
