import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../utils/data';
import ProductItem from './ProductItem';

const Container = styled.div``;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => {
        <ProductItem item={item} />;
      })}
    </Container>
  );
}
