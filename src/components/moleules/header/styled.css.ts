import { motion } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  z-index: 10;
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

export { Nav, Item, Col, Items, CirCle };
