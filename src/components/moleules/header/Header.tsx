import React, { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Logo } from '../../atoms/logo/Logo';
import { SearchForm } from '../../atoms/search/SearchForm';
import { useAnimation, useViewportScroll } from 'framer-motion';
import { Col, Items, Nav, Item, CirCle } from './styled.css';

const scrollVars = {
  top: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  scroll: { backgroundColor: 'rgba(0, 0, 0, 1)' },
};

export const Header = () => {
  const matchHome = useMatch('/');
  const matchTV = useMatch('/tv');
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={scrollVars} initial="start" animate={navAnimation}>
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
        <SearchForm />
      </Col>
    </Nav>
  );
};
