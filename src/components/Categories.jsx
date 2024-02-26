import React from 'react';
import { styled } from 'styled-components';
import { categories } from '../utils/data';
import CategoryItem from './CategoryItem';

const Container = styled.div``;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
}
