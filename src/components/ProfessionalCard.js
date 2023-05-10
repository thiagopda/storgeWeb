import React from 'react';

const ProfessionalCard = ({ professional }) => {
  return (
    <div className="professional-card">
      <h3>{professional.name}</h3>
      <p>Especialidade: {professional.specialty}</p>
      <p>Localização: {professional.location}</p>
      <button>Ver perfil</button>
    </div>
  );
};

export default ProfessionalCard;
