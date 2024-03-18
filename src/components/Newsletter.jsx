import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

export default function Newsletter() {
  const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Desc = styled.div``;
  const Title = styled.h1``;
  const InputContainer = styled.div``;
  const Input = styled.input``;
  const Button = styled.button``;

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
