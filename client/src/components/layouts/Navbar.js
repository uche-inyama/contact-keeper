import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ icon, title }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const handleLogOut = () => {
    logout();
  }

  const authLinks = (
    <Fragment>
      <li>Hello { user && user.name }</li>
      <li>
        <a href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm" onClick={handleLogOut}>Logout</span>
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </Fragment>
  )

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks }
      </ul>
    </div>
  );
};

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon:  'fas fa-id-card-alt'
};

export default Navbar;
