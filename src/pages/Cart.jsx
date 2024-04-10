import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;

export default function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
      </Wrapper>

      <Footer />
    </Container>
  );
}
