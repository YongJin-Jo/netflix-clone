import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const Svg = styled(motion.svg)`
  color: white;
  height: 25px;
  z-index: 9999;
`;

const Wrapper = styled.div`
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

export const Search = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(prev => !prev);
  };
  return (
    <Wrapper>
      <Svg
        animate={{ x: toggle ? -200 : 0 }}
        transition={{ duration: 0.23 }}
        onClick={onClick}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </Svg>

      <Input
        animate={{ scaleX: toggle ? 1 : 0 }}
        type="text"
        placeholder="Search for movie or tv show..."
      />
    </Wrapper>
  );
};
