import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
// import { HashRouter, Route } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

<Provider store={store}>
  <App />
</Provider>

, document.getElementById('root'));
// registerServiceWorker();
