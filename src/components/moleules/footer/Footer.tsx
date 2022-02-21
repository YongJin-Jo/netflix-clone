import styled from 'styled-components';

const Wrapper = styled.div`
  height: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 18px;
    margin: 10px;
  }
`;
export const Footer = () => {
  return (
    <Wrapper>
      <span>NetFlex-Clone</span>
      <span>Make by Yong-Jin-jo</span>
      <a href="https://github.com/YongJin-Jo/netflix-clone">
        <u>Let me Show Code</u>
      </a>
    </Wrapper>
  );
};
