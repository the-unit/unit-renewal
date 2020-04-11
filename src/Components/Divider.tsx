import React from 'react';
import styled from 'styled-components';

type IDividier = {
  title: string;
  style?: object;
};

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DividerTextContainer = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #595959;
  margin-left: 30px;
`;

const DividerLineContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  margin-left: 30px;
`;

const DividerLine = styled.div`
  border-bottom: solid 2px #d8d8d8;
`;

const Divider: React.FC<IDividier> = ({ title, style }) => {
  return (
    <DividerContainer style={style}>
      <DividerTextContainer>{title}</DividerTextContainer>
      <DividerLineContainer>
        <DividerLine />
      </DividerLineContainer>
    </DividerContainer>
  );
};

export default Divider;
