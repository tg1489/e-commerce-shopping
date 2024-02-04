import React from 'react';
import '../css/Navbar.css';
import { styled } from 'styled-components';

// Styled-Components
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

export default function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>Left</Left>
          <Center>Center</Center>
          <Right>Right</Right>
        </Wrapper>
      </Container>
    </>
  );
}
