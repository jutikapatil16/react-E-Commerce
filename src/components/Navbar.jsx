import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Input, MenuItem } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


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
          <Input id="search"></Input>
          <Search/>
        </SearchContainer>
        </Left>
        <Centre>
          <Logo>
          JUTE.
          </Logo>
        </Centre>
        <Right>


        <MenuItem className="MenuItem-bg" >
        <Link className="MenuItem" to="/">Home</Link>
        </MenuItem>

        <MenuItem className="MenuItem-bg" >
        <Link className="MenuItem"  to="/ProductList">Product List</Link>
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
