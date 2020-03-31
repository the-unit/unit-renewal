import React from 'react';
import App from '../Base/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import API from '../Global/api';

const client = new ApolloClient({
  uri: `${API.END_POINT}:${API.PORT}/graphql`
});

export default function Index() {
  return <ApolloProvider client={client}><App/></ApolloProvider>;
}
