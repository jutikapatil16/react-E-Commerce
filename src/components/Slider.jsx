import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import {React, useState} from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
//
const Container = styled.div`
  
  height: 82vh;
  width: 100%;
  position:relative;
 overflow:hidden;
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

  z-index:2;
`;
//WRAPPER
const Wrapper = styled.div`
  height: 100%;
  width:300%;
  display:flex;
  transition: all 1.5s ease;
  transform: translateX(${props=> props.slideIndex * -100}vw);
 
`;


//
const ImgContainer = styled.div`
  height: 100%;
  flex:1;
  display:flex;
  justify-content:center;
  
`;
const Image = styled.img`
height:85vh;


`//
const InfoContainer = styled.div`
  flex:1;
  padding:50px;
  width:100;
`;

const Title = styled.h1`

font-size:70px;
font-weight: 900px;
`;
const Desc = styled.p`
font-size: 30px;
margin:40px 0px;`;

const Button = styled.button`
height:50px;
width:130px;
border: solid gray 2px;
background-color: transparent;
font-size:15px;
font-weight:600;
cursor : pointer
`;
//
const Slide = styled.div`

display: flex;
align-items:center;
width:200%;

background-color :#${(props) => props.bg}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  
    const handleClick = (direction) => {
 
    if(direction==="left"){
    setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
    }
    setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>

        {sliderItems.map((items)=>(
          <Slide bg ={items.bg}>
        <ImgContainer>
          <Image src={items.img} />
        </ImgContainer>

        <InfoContainer>
          <Title>{items.title}</Title>
          <Desc>{items.desc}</Desc>
          <Button>
            SHOP NOW!
          </Button>
        </InfoContainer>
        </Slide>
        ))}

        {/* <Slide bg ="fcfed">
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
        </Slide> */}
        
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
