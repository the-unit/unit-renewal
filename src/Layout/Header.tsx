import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Color from '../Styles/colors';
import NavBtn from '../Components/NavBtn';
import { Link } from 'react-router-dom';

const WidthNavbar = styled(Navbar)`
  background-color: ${(props) => props.color};
`;

const Logo = styled.img`
  margin-left: 15px;
  width: 90px;
  @media screen and (max-width: 864px) {
    margin: 5px;
  }
`;

export default function Header() {
  return (
    <WidthNavbar
      collapseOnSelect
      expand="md"
      className="p-0"
      color={Color.TREE_GREEN}
    >
      <Link to={'/'}>
        <Navbar.Brand>
          <Logo src={process.env.PUBLIC_URL + '/logo.png'} alt={'logo'} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
