import React from 'react';
import './App.css';
import Header from '../Components/header';
import Banner from '../Components/banner';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MaxWidthContainer = styled.div`
  max-width: 960px;
  flex: 1;
`;

const App = () => {
  return (
    <FlexContainer>
      <MaxWidthContainer>
        <Header />
        <Banner />
      </MaxWidthContainer>
    </FlexContainer>
  );
};

export default App;
