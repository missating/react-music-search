// react libraries
import React from 'react';

// third party packages
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components 
import App from './App';

export const app = ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

export default app;
