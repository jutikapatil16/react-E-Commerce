import React from 'react'
import styled from "styled-components";
import { products } from '../data';
import Product from './Product';

const Container = styled.div`
flex: 1;
display:flex;
flex-wrap:wrap;
`


const Products = () => {
  return (
    <Container>
   {products.map((item)=>(
    <Product item ={item} key={item.id}/>
   ))}
    </Container>
  )
}

export default Products
