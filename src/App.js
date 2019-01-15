import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import './config/reactotron';

import store from './store';

import Main from './pages/Main';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Main />
  </Provider>
);

export default App;
