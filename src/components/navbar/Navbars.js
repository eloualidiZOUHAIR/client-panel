import React from 'react';
import Navbar from './Navbar';

const Navbars = () => {
  const state = {
    navbar: [
      { id: 1, name: 'Home' },
      { id: 2, name: 'Client Panel' },
    ],
  };

  return (
    <div>
      {state.map((navbar) => (
        <Navbar date={navbar} />
      ))}
    </div>
  );
};

export default Navbars;
