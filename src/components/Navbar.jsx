import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display :flex;
  justify-content:space-between;
  font-size:20px;
`;

const left = styled.div`
flex:1;
`
const centre = styled.div`
flex:1;
`
const right = styled.div`
flex:1;
`
const searchContainer = styled.div`
display: flex;
align-items:center;
border: solid 10px; 

`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <left>
        EN 
        <searchContainer>
          input
          
        </searchContainer>
        </left>
        <centre>
        center
        </centre>
        <right>
        right
        </right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
