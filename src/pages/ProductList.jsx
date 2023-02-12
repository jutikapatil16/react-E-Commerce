import { Announcement } from '@mui/icons-material'
import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Announcements from '../components/Announcements'
import styled from "styled-components";




const Container = styled.div`

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`

const Filter = styled.div`
margin: 20px;
display:flex;
align-items:center;
`

const FilterText = styled.div`
font-weight:600

`

const Title = styled.h1`
font-size:30px;
margin:15px;`

const Select = styled.select`
margin: 0 0 0 10px;
font-size:15px;
padding: 5px;

`
const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
<Title>Dresses</Title>

<FilterContainer>
<Filter>
<FilterText>Filter Products :
<Select>
  <Option disabled selected>Color</Option>
  <Option>WHite</Option>
  <Option>black</Option>
  <Option>blue</Option>
  <Option>Red</Option>
  <Option>Lavender</Option>
</Select>

<Select>
  <Option disabled selected>Size</Option>
  <Option>XL</Option>
  <Option>L</Option>
  <Option>M</Option>
  <Option>S</Option>
  <Option>XS</Option>
</Select>
  </FilterText>
</Filter>
<Filter>
<FilterText>Sort Products :</FilterText>
<Select>
  <Option disabled selected>Price</Option>
  <Option> Price</Option>
  <Option>Newest</Option>
  <Option>Trending</Option>
  
</Select>
</Filter>
</FilterContainer>
<Products/>
    </Container>
  )
}

export default ProductList
