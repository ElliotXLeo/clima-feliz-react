import React from 'react';

const Footer = ({ currentDate, author }) => {
  return (
    <footer>
      <nav className="nav-wrapper light-blue darken-2">
        <a href="#!" className="footer__contenido">🦄Copyright &copy; {currentDate} {author}. Todos los derechos reservados.🦄</a>
      </nav>
    </footer>
  );
}

export default Footer;

