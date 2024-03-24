import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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

  const Title = styled.h3`
    margin-bottom: 30px;
  `;

  const List = styled.ul`
    // ul has its own margin and padding
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;

  const ContactItem = styled.div``;
  const Payment = styled.img``;

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
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +1 555 555 5555
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon />
          contact@trendz.dev
        </ContactItem>
        <Payment src='' />
      </Right>
    </Container>
  );
}
