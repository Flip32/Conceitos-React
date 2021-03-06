import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";

import './config/ReactotronConfig'

import GlobalStyle from './styles/global'
import Routes from './routes'
import Header from "./components/Header";

import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <GlobalStyle/>
              <ToastContainer autoClose={3000}/>
              <Header/>
              <Routes/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
