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


  return (
    <Container>
      Super deals! Jeans just at Rs. 399 💕
    </Container>
  )
}

export default Announcements
