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
  `;

  const Logo = styled.div``;
  const Desc = styled.p``;
  const SocialContainer = styled.div``;
  const SocialIcon = styled.div``;

  const Center = styled.div`
    flex: 1;
  `;

  const Right = styled.div`
    flex: 1;
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
