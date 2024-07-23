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
        JUTE.
      </Logo>
      <Desc>
      Our modern e-commerce platform is designed to offer you an unparalleled shopping experience, combining the latest trends with cutting-edge technology.From chic streetwear to elegant evening gowns, our selection caters to every occasion and taste. 
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
    <ListItem><a href="/">Home</a></ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Kid's Fashion</ListItem>
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
