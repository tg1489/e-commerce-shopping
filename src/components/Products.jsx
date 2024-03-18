import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../utils/data';
import ProductItem from './ProductItem';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
}
