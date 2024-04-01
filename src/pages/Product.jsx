import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.div``;
const InfoContainer = styled.div``;

export default function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            possimus quos tempore repellat ducimus dolores autem libero! Non
            illum commodi a quam voluptatum libero vero architecto consequuntur
            quae dolore. Voluptas.
          </Desc>
          <Price>$20</Price>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}
