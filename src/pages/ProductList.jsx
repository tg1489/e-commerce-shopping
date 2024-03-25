import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

const Container = styled.div``;
const Container = styled.div``;
const Container = styled.div``;
const Container = styled.div``;

export default function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>Filter1</Filter>
        <Filter>Filter2</Filter>
      </FilterContainer>
    </Container>
  );
}
