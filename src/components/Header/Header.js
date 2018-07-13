import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({title}) => (
  <header>
    <h3 className="siteHeader__title">{title}</h3>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
