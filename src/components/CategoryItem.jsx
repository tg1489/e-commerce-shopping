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
  top: 0; // start at the top
  left: 0; // and left position to add info inside image
  width: 100%;
  height: 100%;
  // Center the info below:
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: 0;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

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
