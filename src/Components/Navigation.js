import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function  Navigation (){
  
return(

<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand >HOME film</Navbar.Brand>
<Nav className="me-auto">
  <Link to ='/'>Home</Link>
  <Link to ='/detail'>Details</Link>
  
</Nav>
</Container>
</Navbar>
)
}


