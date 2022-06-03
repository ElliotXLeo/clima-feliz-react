import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ currentDate, author }) => {
  return (
    <footer className="footer">
      <nav className="nav-wrapper light-blue darken-2">
        <div className="footer__contenido">🦄Copyright &copy; {currentDate} {author}. Todos los derechos reservados.🦄</div>
      </nav>
    </footer>
  );
}

Footer.propTypes = {
  currentDate: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
}

export default Footer;

