import React, { useState } from "react";
import ProfessionalsList from "./ProfessionalsList";
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Faça uma chamada API para pesquisar profissionais com base na consulta de pesquisa
    // Atualize a lista de resultados de pesquisa de acordo
  };

  return (
    <div>
      <h2>Pesquisar Profissionais</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar por especialidade..."
        />
        <button type="submit">Pesquisar</button>
      </form>
      <ProfessionalsList professionals={searchResults} />
    </div>
  );
};

export default Search;
