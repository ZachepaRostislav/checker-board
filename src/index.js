import React from 'react';
import ReactDOM from 'react-dom';

// components 
import App from './App';
import { Provider } from 'react-redux';

// store
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


