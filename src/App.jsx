// react libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import Routes from './routes/index';

export const App = () => ((
  <React.Fragment>
    <Routes />
  </React.Fragment>
));

export default withRouter(App);
