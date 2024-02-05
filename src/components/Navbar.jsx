import React from 'react';
import '../css/Navbar.css';
import { styled } from 'styled-components';
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

// Styled-Components
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1; // distribute available space proportionally
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1; // distribute available space proportionally
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1; // distribute available space proportionally
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>7EVEN.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN-IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color='success'>
                <MailIcon color='action' />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
