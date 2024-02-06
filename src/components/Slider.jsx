import React from 'react';
import { styled } from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { ArrowRightOutlined } from '@mui/icons-material';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
`;

export default function Slider() {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlinedIcon />
      </Arrow>

      <Arrow>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
