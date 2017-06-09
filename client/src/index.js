import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import 'tachyons';
import './index.css';

import AddUser from  './components/add-user.component';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4200/graphql'
})

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route path='/' component={AddUser} />
    </BrowserRouter>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
// <ApolloProvider client={client}>
// <BrowserRouter>
//   <Switch>
//     <Route path='/' component={ListPage} />
//     <Route path='/create' component={CreatePage} />
//   </Switch>
//   </BrowserRouter>
// </ApolloProvider>
