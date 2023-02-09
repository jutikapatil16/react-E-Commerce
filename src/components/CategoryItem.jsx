import React from 'react'
import styled from "styled-components";

const Container = styled.div`
flex:1;
position:relative;

`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const Image = styled.img`
width:100%;
height:581px;
object-fit:cover;
`
const Title = styled.b`
color:white;
font-size:30px;
font-weight:900;

`
const Button = styled.button`
height:50px;
width:100px;
font-size:15px;
color:black;

`

const CategoryItem = ({item}) => {
  return (<Container>
    
    <Image src ={item.img}/>
    <Info>
      <Title >
      {item.title}
      </Title>
      <Button>
       SHOP NOW!
      </Button>
    </Info>
    </Container>) 
}

export default CategoryItem