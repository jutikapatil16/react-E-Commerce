import { Google, LinkedIn,Facebook,Twitter } from '@mui/icons-material'

import React from 'react'
import styled from 'styled-components';


const Container =styled.div`
font-size:20px;
display:flex;
`;
const Left= styled.div`
flex:1;
padding:30px;`;
const Logo= styled.h1`
font-size:50px;
font-weight:900;`;
const Desc= styled.div``;
const SocialContainer= styled.div`
display:flex;

`;
const SocialIcon= styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin:10px 5px;
`

const Center = styled.div`
flex:1;
height:150px;
`;
// const Right = styled.div`
// flex:1;
// `;

const Title = styled.h1`
padding:30px 0 ;`;

const List = styled.ul`
padding:0;
display:flex;
flex-wrap:wrap;
list-style:none;

`;
const ListItem = styled.li`
margin-right:10px;
width:50%;
`;

 

const Footer = () => {
  return (
    <Container>
     <Left>
      <Logo>
        JUTS.
      </Logo>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt blanditiis, nemo amet placeat inventore modi ullam voluptas atque quis dolor cumque et nulla molestiae doloremque odit, earum repudiandae. Nisi.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <Facebook/>
        </SocialIcon >
        <SocialIcon  color="3B5999">
          <Twitter/>
        </SocialIcon>
        <SocialIcon  color="3B5999">
          <LinkedIn/>
        </SocialIcon>
        <SocialIcon  color="3B5999">
          <Google/>
        </SocialIcon>
        
      </SocialContainer>
     </Left>

     <Center>
    <Title>Useful links</Title>
    <List>
    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Home</ListItem>
    <ListItem>Men Fashion</ListItem>
    <ListItem>Women Fashion</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>Wishlist</ListItem>
    <ListItem>Terms</ListItem>
    </List>


     </Center>
     {/* <Right>

     </Right> */}
    </Container>
  )
}

export default Footer
