import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Color from './../Styles/cololr';

const WidthNavbar = styled(Navbar)`
  background-color: ${props => props.color};
  width: 100%;
  height: 60px;
`;

const Logo = styled.img`
  margin-left: 15px;
  width: 90px;
`;

const TextCenterNavLink = styled(Nav.Link)`
  color: white !important;
  text-align: center;
  font-weight: bold;
  min-width: 90px;
  height: 60px;
  &:hover {
    background-color: ${props => props.hovercolor}
  }
  @media screen and (max-width: 864px) {
    width: 100%;
  }
  padding: 20px 13px 16px 14px;
`;

export default function Header() {
  return (
    <WidthNavbar expand="sm" color={Color.TREE_GREEN} className="p-0">
      <Navbar.Brand href="#home" className="p-0">
        <Logo
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt={'logo'}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"
                     style={{ color: 'white', backgroundColor: 'white', borderColor: 'white' }}/>
      <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
        <Nav className="ml-auto">
          <TextCenterNavLink href="#home"
                             hovercolor={Color.TREE_LIGHT_GREEN}>About Us</TextCenterNavLink>
          <TextCenterNavLink href="#partner"
                             hovercolor={Color.TREE_LIGHT_GREEN}>Partner</TextCenterNavLink>
          <TextCenterNavLink href="#sponsor"
                             hovercolor={Color.TREE_LIGHT_GREEN}>Sponsor</TextCenterNavLink>
          <TextCenterNavLink href="#contact"
                             hovercolor={Color.TREE_LIGHT_GREEN}>Contact</TextCenterNavLink>
        </Nav>
      </Navbar.Collapse>
    </WidthNavbar>
  );
}
