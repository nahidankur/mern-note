import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css'
import './util.css'
import './material-design-iconic-font.min.css'
import './fonts/Material-Design-Iconic-Font.ttf'
import './fonts/Material-Design-Iconic-Font.woff'
import './fonts/Material-Design-Iconic-Font.woff2'
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
