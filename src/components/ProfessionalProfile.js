import React from 'react';

const ProfessionalProfile = ({ user }) => {
  // Assumindo que o "user" é passado como uma prop e contém as informações do usuário atualmente logado

  return (
    <div>
      <h1>Perfil do Profissional</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Especialidade: {user.specialty}</p>
      {/* Adicionar mais campos conforme necessário */}
    </div>
  );
};

export default ProfessionalProfile;
