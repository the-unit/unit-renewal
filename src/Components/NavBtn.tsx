import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import Color from '../Styles/cololr';
import { Nav } from 'react-bootstrap';

const NavBtnContainer = styled.div<INavContainer>`
  margin-left: 28px;
  color: white;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  min-width: 90px;
  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
  @media screen and (max-width: 864px) {
    margin: 0;
    background-color: ${() => Color.TREE_GREEN};
  }
  padding: 20px 13px 16px 14px;
`;

type INavBtn = {
  to: string;
  isHash?: boolean;
  hovercolor?: string;
};

type INavContainer = {
  hovercolor?: string;
};

const NavBtn: React.FC<INavBtn> = ({ to, isHash, hovercolor, children }) => (
  <NavBtnContainer hovercolor={hovercolor} data-toggle="collapse" data-target=".navbar-collapse.show">
    {isHash ? (
      <Nav.Link as={HashLink} to={to} href={`${to}`} className='p-0'>{children ? children : null}</Nav.Link>
    ) : (
      <Nav.Link as={Link} to={to} href={`${to}`} className='p-0'>{children ? children : null}</Nav.Link>
    )}
  </NavBtnContainer>
);

export default NavBtn;
