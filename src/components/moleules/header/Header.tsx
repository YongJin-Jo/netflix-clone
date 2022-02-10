import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../../atoms/logo/Logo';
import { Search } from '../../atoms/search/Search';
import { motion } from 'framer-motion';
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;
const Col = styled.div`
  margin-right: 20px;
  display: flex;
`;
const Items = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
  color: ${props => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &:hover {
    color: ${props => props.theme.white.lighter};
  }
`;

const CirCle = styled(motion.span)`
  width: 10px;
  height: 10px;
  background: ${props => props.theme.red};
  border-radius: 5px;
  margin-top: 10px;
`;

export const Header = () => {
  const matchHome = useMatch('/');
  const matchTV = useMatch('/tv');
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>
            <Link to={'/'}>
              Home
              {matchHome && <CirCle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to={'/tv'}>
              TV Shows
              {matchTV && <CirCle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search />
      </Col>
    </Nav>
  );
};
