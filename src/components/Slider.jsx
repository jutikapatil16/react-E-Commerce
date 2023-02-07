import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: coral;
  height: 100vh;
  width: 100%;

`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  
  background-color: #fff7f7;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content:center;

  position:absolute;
  top:0;
  bottom:0;
  
  left: ${props => props.direction ==="left" && "10px"};
  right :${props => props.direction ==="right" && "10px"};
  margin:auto;

  cursor:pointer;
  opacity:50%;
  

`;
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosOutlined/>
      </Arrow>
      <Arrow direction="right">
        <ArrowForwardIosOutlined/>
      </Arrow>
    </Container>
  );
};

export default Slider;
