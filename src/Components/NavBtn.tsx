import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const NavBtnContainer = styled.div<INavContainer>`
  margin-left: 28px;
  color: white;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  min-width: 90px;
  height: 60px;
  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
  @media screen and (max-width: 864px) {
    width: 100%;
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
  <NavBtnContainer hovercolor={hovercolor}>
    {isHash ? (
      <HashLink to={to}>{children ? children : null}</HashLink>
    ) : (
      <Link to={to}>{children ? children : null}</Link>
    )}
  </NavBtnContainer>
);

export default NavBtn;
