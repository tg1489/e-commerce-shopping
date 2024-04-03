import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='email' />
          <Input placeholder='username' />
          <Input placeholder='password' />
        </Form>
      </Wrapper>
    </Container>
  );
}
