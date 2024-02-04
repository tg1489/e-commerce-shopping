import React from 'react';
import '../css/Navbar.css';
import { styled } from 'styled-components';
import { Search } from '@mui/icons-material';

// Styled-Components
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1; // distribute available space proportionally
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const 

const Center = styled.div`
  flex: 1; // distribute available space proportionally
`;
const Right = styled.div`
  flex: 1; // distribute available space proportionally
`;

export default function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <Search />
          </Left>
          <Center>Center</Center>
          <Right>Right</Right>
        </Wrapper>
      </Container>
    </>
  );
}
