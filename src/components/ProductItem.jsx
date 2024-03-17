import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div``;

export default function ProductItem({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon></Icon>
      </Info>
    </Container>
  );
}
