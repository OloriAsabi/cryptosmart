import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

