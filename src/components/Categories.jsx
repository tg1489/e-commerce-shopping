import React from 'react';
import styled from 'styled-components';
import { categories } from '../utils/data';
import CategoryItem from './CategoryItem';
import { mobile } from '../utils/responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}
