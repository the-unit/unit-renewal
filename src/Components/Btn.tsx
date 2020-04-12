import React from 'react';
import styled from 'styled-components';
import Color from '../Styles/colors';

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 48px;
  border-radius: 24px;
  border: solid 2px ${() => Color.BTN_GREEN};
  opacity: 0.8;
  background-color: rgba(255, 255, 255, 0.7);
`;

const BtnTitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${() => Color.BTN_GREEN};
`

const Btn: React.FC = ({children}) => {
  return <BtnContainer>
    <BtnTitleContainer>
      {children}
    </BtnTitleContainer>
  </BtnContainer>;
}

export default Btn;