import React from 'react';
import './App.css';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../Layout/Content';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import API from '../Global/api';

const client = new ApolloClient({
  uri: `${API.END_POINT}:${API.PORT}/graphql`,
});

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
    <ApolloProvider client={client}>
      <Router basename="/">
        <FlexContainer>
          <MaxWidthContainer>
            <Header />
            <Content />
            <Footer />
          </MaxWidthContainer>
        </FlexContainer>
      </Router>
    </ApolloProvider>
  );
};

export default App;
