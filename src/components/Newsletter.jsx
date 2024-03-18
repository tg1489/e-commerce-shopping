import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

export default function Newsletter() {
  const Container = styled.div``;
  const Desc = styled.div``;
  const Title = styled.div``;
  const InputContainer = styled.div``;
  const Input = styled.input``;
  const Button = styled.button``;

  return (
    <Container>
      <Title></Title>
      <Desc></Desc>
      <InputContainer>
        <Input />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}
