import React from 'react'
import styled from 'styled-components';
import { ShoppingCartOutlined , SearchOutlined , FavoriteBorderOutlined } from '@mui/icons-material';

const Container = styled.div`

flex:1;
margin:10px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;
`
const Circle =styled.div`
`

const Image = styled.img`
height:100%;
width:100%;
z-index:2;

`
const Icon = styled.div`
cursor:pointer;
`
const Info = styled.div`
position:absolute;
top:0;
left:0;
margin:5px;
z-index: 3;
background-color: white;
padding:4px;
border-radius:5px;`



const Product = ({item}) => {
  return (
    <Container>
<Circle/>
<Image src={item.img}/>
<Info>
<Icon>
<ShoppingCartOutlined/>
</Icon>
<Icon>
<SearchOutlined/>
</Icon>
<Icon>
<FavoriteBorderOutlined/>
</Icon>
</Info>
    </Container>
  )
}

export default Product
