import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Navbar/Nav.css"
const Navbarheader = () => {
  return (
    <div>
      <Navbar  collapseOnSelect id='navbar' expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">Career</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className='nav-container'>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <Nav.Link href="companyinfo">Doanh nghiệp</Nav.Link>
              <Nav.Link href="personinfo">Cá nhân</Nav.Link>
              <NavDropdown className='dd' title="Chức năng" id="basic-nav-dropdown">
              <NavDropdown.Item href="/updatepersonalinfo">Update Personal Info</NavDropdown.Item>
              <NavDropdown.Item href="/updatecompanyinfo">Update Company Info</NavDropdown.Item>
              <NavDropdown.Item href="/job">Job</NavDropdown.Item>
              <NavDropdown.Item href="/postjob">Post Job</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
          <div><Nav>
            <Nav.Link href="/signin">Đăng ký</Nav.Link>
            <Nav.Link href="/login">Đăng nhập</Nav.Link>
          </Nav></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarheader