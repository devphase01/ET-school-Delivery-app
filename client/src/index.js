import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
// import { getAmount } from './app/reducers/Cart';
import { store } from './app/store';
import Layout from './components/Layout/Layout';

// store.dispatch(getAmount());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </BrowserRouter>
);