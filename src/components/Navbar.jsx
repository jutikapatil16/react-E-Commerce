import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Input, MenuItem } from "@mui/material";
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display :flex;
  justify-content:space-between;
  font-size:20px;
`
const Left = styled.div`
flex:1;
display: flex;
align-items:center;
`
const SearchContainer = styled.div`
display: flex;
align-items:center;
border: 1px solid lightgray ; 
width:40%;
margin:10px;
`
  

const Centre = styled.div`
flex:1;
display:flex;
justify-content: center;
`
const Logo = styled.h1`
font-weight: 900;
`

const Right = styled.div`
flex:1;
display:flex;
justify-content: end;

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        EN 
        <SearchContainer>
          <Input></Input>
          <Search/>
        </SearchContainer>
        </Left>
        <Centre>
          <Logo>
          LAMA.
          </Logo>
        </Centre>
        <Right>
        <MenuItem >
         REGISTER
        </MenuItem>
        <MenuItem >
         SIGN IN
        </MenuItem>
        <MenuItem >
         <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined/>
         </Badge>
        </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
