import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderDesktopMenu = () => {
    return (
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/signin">Entrar</Link>
        <Link to="/patientsignup">Cadastro paciente</Link>
        <Link to="/appointmentbooking">Agendar consulta</Link>
        <Link to="/professionalsignup">Cadastro profissional</Link>
        <Link to="/professionaldashboard">Dashboard do Profissional</Link>
      </div>
    );
  };

  const renderMobileMenu = () => {
    return (
      <div>
        <button onClick={toggleMenu}>☰</button>
        {isMenuOpen && (
          <div className="navbar-links">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/signin" onClick={toggleMenu}>Sign In</Link>
            <Link to="/patientsignup" onClick={toggleMenu}>Cadastro Patient</Link>
            <Link to="/professionalsignup" onClick={toggleMenu}>Cadastro Professional</Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="navbar">
      <h1></h1>
      {isMobile ? renderMobileMenu() : renderDesktopMenu()}
    </nav>
  );
};

export default NavBar;
