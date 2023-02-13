import React from 'react'
import styled from 'styled-components';
import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@mui/icons-material';

const Infom = styled.div`

opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;

display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.2);

z-index: 3;
transition:all 0.5s ease;`

const Container= styled.div`

flex:1;
margin:10px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;

&:hover ${Infom}{
  opacity:1;
}
`
const Circle =styled.div`
`

const Image = styled.img`
height:100%;
width:100%;
position:relative;
z-index:2;

`

//Icon
const Icon = styled.div`

cursor:pointer;
width:40px;
height:40px;
margin:5px;
background-color:white;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
padding:5px;
transition:all 0.5s ease ;

&:hover{
  background-color: #ffffff;
  transform:scale(1.1);
}
`




const Product = ({item}) => {
  return (
    <Container>
<Image src={item.img}/>
<Infom>
<Icon>
<ShoppingCartOutlined/>
</Icon>
<Icon>
<SearchOutlined/>
</Icon>
<Icon>
<FavoriteBorderOutlined/>
</Icon>
</Infom>
</Container>
  )
}

export default Product
