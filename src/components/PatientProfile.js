import React from 'react';

const PatientProfile = ({ user }) => {
  // Assumindo que o "user" é passado como uma prop e contém as informações do usuário atualmente logado

  return (
    <div>
      <h1>Perfil do Paciente</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Data de Nascimento: {user.birthdate}</p>
      {/* Adicionar mais campos conforme necessário */}
    </div>
  );
};

export default PatientProfile;
