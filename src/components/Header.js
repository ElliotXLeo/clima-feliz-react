import React from "react";
import PropTypes from 'prop-types';

function Header({ company }) {

  const { name } = company;

  return (
    <header>
      <nav className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">{name}</a>
      </nav>
    </header>
  );
}

Header.propTypes = {
  company: PropTypes.object.isRequired
}

export default Header;
