import React from 'react';
import ProfessionalCard from './ProfessionalCard';

const ProfessionalsList = ({ query }) => {
  // Implemente a lógica para buscar os profissionais com base na consulta
  const professionals = []; // Exemplo: use useEffect e useState para buscar os profissionais

  return (
    <div>
      {professionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </div>
  );
};

export default ProfessionalsList;
