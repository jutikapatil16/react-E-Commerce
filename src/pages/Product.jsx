
import { Add , Remove} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Navbar from '../components/Navbar';

const Container = styled.div`
flex:1;
width:100%;
`; 
const Wrapper = styled.div`
display:flex;
align-items:center;
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:90%;
height:85vh;
object-fit:cover;
margin:10px;`
;
const InfoContainer = styled.div`
flex:1;`;
const Title = styled.h1`
margin:50px 20px;
font-size:50px;
`;
const Desc = styled.div`
font-size:20px;
margin:20px;`;
const Price = styled.b`
font-size:50px;
margin:20px;`;

const FilterContainer = styled.div`

`

const Filter = styled.div`
margin: 20px;
width:50%;
display:flex;
align-items:center;
justify-content:center;
`

const FilterWrapper = styled.div`
width:90%;
font-weight:600;
display:flex;

`
const FilterColor = styled.div`
background-color:${props => props.color};
width:40px;
height:40px;
border-radius:50%;
border: solid black 1px;
margin-right:20px;`;


const Select = styled.select`
font-size:15px;
padding: 5px;
width: 100px;
`
const Option = styled.option`

`
const AmountContainer = styled.div`
display:flex;
align-items:center;
margin:30px;`;
const Amount = styled.div`
font-size:30px;
margin:0 30px;`;
const Button = styled.button`
height:50px;
width:130px;

border: solid gray 2px;
background-color: transparent;
font-size:15px;
font-weight:600;
cursor : pointer;
`;

const Product = () => {
  return (
   <Container>
      <Navbar/>
      <Announcements/>

      <Wrapper>
      <ImgContainer>
      <Image src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"/>
      </ImgContainer>

<InfoContainer>
        <Title>Black Tee</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio similique officia facere doloremque nam saepe dolorum, praesentium itaque laborum accusantium sint voluptate perferendis dolorem mollitia porro optio cum. Sit.</Desc>
        <Price>$ 50</Price>


<FilterContainer>
<Filter>

<FilterWrapper>
<FilterColor color="black"/>
<FilterColor color="white"/>
<FilterColor color="gray"/>
<FilterColor color="lavender"/>
</FilterWrapper>

<Select>
  <Option disabled selected>Size</Option>
  <Option>XL</Option>
  <Option>L</Option>
  <Option>M</Option>
  <Option>S</Option>
  <Option>XS</Option>
</Select>

</Filter>
</FilterContainer>

<AmountContainer>
<Remove/>
<Amount>1</Amount>
<Add/>
</AmountContainer>
<Button>
BUY NOW  
</Button>
</InfoContainer>


  </Wrapper>
  </Container>
  )
}

export default Product