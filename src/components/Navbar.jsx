import React from 'react';
import '../css/Navbar.css';
import { styled } from 'styled-components';

// Styled-Components
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;

export default function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>Navbar</Wrapper>
      </Container>
    </>
  );
}
