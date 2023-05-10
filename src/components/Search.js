import React, { useState } from 'react';
import ProfessionalsList from './ProfessionalsList';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implemente a lógica de pesquisa aqui
  };

  return (
    <div>
      <h1>Pesquisar Profissionais</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite sua pesquisa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
      <ProfessionalsList query={query} />
    </div>
  );
};

export default Search;
