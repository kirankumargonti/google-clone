import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GoogleStateProvider } from './context/context';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <GoogleStateProvider initialState={initialState} reducer={reducer}>
      <App />
    </GoogleStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
