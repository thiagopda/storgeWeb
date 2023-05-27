import React from "react";

const ProfessionalsList = ({ professionals }) => {
  return (
    <div>
      <h2>Lista de Profissionais</h2>
      <ul>
        {professionals.map((professional) => (
          <li key={professional.id}>
            {professional.nome} {professional.sobrenome} -{" "}
            {professional.especialidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalsList;
