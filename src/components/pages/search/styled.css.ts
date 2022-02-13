import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 100vh;
`;

const BigTitle = styled.h3`
  padding: 20px;
  margin-top: 100px;
  font-size: 48px;
`;

const ItemList = styled.ul`
  gap: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Item = styled.li``;

export { Wrapper, Container, BigTitle, Item, ItemList };
