import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
`;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input``;

const Agreement = styled.span``;

const Button = styled.button``;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='first name' />
          <Input placeholder='last name' />
          <Input placeholder='email' />
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
