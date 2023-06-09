import React from 'react';
import ReactDOM from 'react-dom'; import './index.css';
import App from './App';
//
import { ApolloClient, InMemoryCache } from '@apollo/client'; import { ApolloProvider } from '@apollo/client';
//

import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'http://localhost:4000/courses',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>, 
  document.getElementById('root')
);


reportWebVitals();
