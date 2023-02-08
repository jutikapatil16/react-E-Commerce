import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  
  height: 100vh;
  width: 100%;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;

  background-color: #f7f7f7;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 50%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding:50px;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
height:90vh;
margin:-50px 0 0 100px;
`
const InfoContainer = styled.div`
  flex: 1;
  padding:50px;
 
`;

const Slide = styled.div`

display: flex;
align-items:center;
`;

const Title = styled.h1`

font-size:70px;
font-weight: 600px;
`;
const Desc = styled.p`
font-size: 30px;
margin:40px 0px;`;

const Button = styled.button`
height:50px;
width:130px;
border: solid gray 1px;
background-color: transparent;
font-size:15px;
font-weight:600;
cursor : pointer
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg ="fcf1ed">
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" />
        </ImgContainer>

        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>Don't compromise on STYLE! Get 50% OFF on orders above 699😍</Desc>
          <Button>
            SHOP NOW!
          </Button>
        </InfoContainer>
        </Slide>
        <Slide bg="fcf1ef">
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" />
        </ImgContainer>

        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>Don't compromise on STYLE! Get 50% OFF on orders above 699😍</Desc>
          <Button>
            SHOP NOW!
          </Button>
        </InfoContainer>
        </Slide>
        <Slide bg ="fcfed">
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" />
        </ImgContainer>

        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>Don't compromise on STYLE! Get 50% OFF on orders above 699😍</Desc>
          <Button>
            SHOP NOW!
          </Button>
        </InfoContainer>
        </Slide>
        
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
