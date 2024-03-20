import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  const Container = styled.div`
    display: flex;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

  const Logo = styled.h1``;
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  const SocialContainer = styled.div`
    display: flex;
  `;
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 20px;
  `;

  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;

  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;

  return (
    <Container>
      <Left>
        <Logo>TRENDZ.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't even look slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <XIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
}
