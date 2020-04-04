import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Color from './../Styles/cololr';
import NavBtn from '../Components/NavBtn';
import { Link } from 'react-router-dom';

const WidthNavbar = styled(Navbar)`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 60px;
`;

const Logo = styled.img`
  margin-left: 15px;
  width: 90px;
`;

export default function Header() {
  return (
    <WidthNavbar expand="sm" color={Color.TREE_GREEN} className="p-0">
      <Link to={'/'}>
        <Navbar.Brand className="p-0">
          <Logo src={process.env.PUBLIC_URL + '/logo.png'} alt={'logo'} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{
          color: 'white',
          backgroundColor: 'white',
          borderColor: 'white',
        }}
      />
      <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
        <Nav className="ml-auto">
          <NavBtn to="/aboutus" hovercolor={Color.TREE_LIGHT_GREEN}>
            About Us
          </NavBtn>
          <NavBtn to="/partners" hovercolor={Color.TREE_LIGHT_GREEN}>
            Partner
          </NavBtn>
          <NavBtn to="/sponsors" hovercolor={Color.TREE_LIGHT_GREEN}>
            Sponsor
          </NavBtn>
          <NavBtn to="/Contact" hovercolor={Color.TREE_LIGHT_GREEN}>
            Contact
          </NavBtn>
        </Nav>
      </Navbar.Collapse>
    </WidthNavbar>
  );
}
