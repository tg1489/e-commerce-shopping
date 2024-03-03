import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  flex: 1; // images will grow to fill space.
  margin: 3px; // images will have space between them.
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // crops squished images to fix aspect ration
`;
const Info = styled.div`
  position: absolute;
`;
const Title = styled.h1``;
const Button = styled.button``;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
