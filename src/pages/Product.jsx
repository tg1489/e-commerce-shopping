import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div``;

export default function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
