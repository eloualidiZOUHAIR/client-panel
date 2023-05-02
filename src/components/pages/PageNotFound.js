import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h3>Page Not Found</h3>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default PageNotFound;
