import React from 'react';

import Header from '../components/Header';

const ErrorPage = () => (
  <div className="page-container">
    <Header />
    <div className="page-container__content">
      <h1 className="error-message"> 404 NOT FOUND! </h1>
    </div>
  </div>
);

export default ErrorPage;
