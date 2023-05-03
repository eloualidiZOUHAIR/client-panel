import React from 'react';
//* class for system validation => lebrivation : impt
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbarc.css';

const Navbar = (props) => {
  const { title, id, name } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/contact/add">
            Add Contact
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to={`/about/${id}/${name}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Aucun title',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
