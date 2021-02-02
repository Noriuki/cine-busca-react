/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';
import './style.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {routes.map((routeData) => (
          <Route {...routeData} key={routeData.component.name} />
        ))}
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
