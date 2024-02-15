import React from 'react';
import { styled } from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { ArrowRightOutlined } from '@mui/icons-material';
import shopping from '../assets/shopping.jpg';

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative; // parent arrows
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; // child arrows
  //   center arrows vertically:
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  //   end of code for center arrows vertically
  cursor: pointer;
  opacity: 0.5;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;

export default function Slider() {
  return (
    <Container>
      <Arrow direction='left'>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image className='slider-image' src={shopping} />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET A FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction='right'>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
