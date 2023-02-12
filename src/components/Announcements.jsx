import React from 'react'
import styled from "styled-components";

const Announcements = () => {
  const Container = styled.div`
  background-color: teal;
  color: white;
  height:30px;
  display:flex;
  justify-content:center;
  font-size: 20px;
`
const Span= styled.div`
font-weight:600
`

  return (
    <Container>
      Super deals! Jeans just @ <Span> Rs. 399</Span> 
    </Container>
  )
}

export default Announcements
