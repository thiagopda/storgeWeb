import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Pesquisar Profissionais</Link>
      <Link to="/signup">Cadastrar</Link>
      <Link to="/signin">Entrar</Link>
    </nav>
  );
};

export default Navbar;
