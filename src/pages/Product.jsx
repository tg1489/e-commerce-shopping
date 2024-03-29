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
      <Newsletter />
      <Footer />
    </Container>
  );
}
