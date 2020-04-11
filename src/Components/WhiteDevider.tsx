import React from 'react';
import styled from 'styled-components';
import Color from '../Styles/colors';

interface IDevider {
  back: string;
}

const WhiteDeviderContainer = styled.div<IDevider>`
  height: 40px;
  background-color: ${(props) => props.back};
`;

export default function WhiteDevider() {
  return <WhiteDeviderContainer back={Color.BACK_GRAY_WHITE} />;
}
