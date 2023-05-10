import React, { useState } from 'react';

const SignUp = () => {
  const [userType, setUserType] = useState('patient');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implemente a lógica de registro aqui, por exemplo, fazendo uma solicitação para o back-end

    console.log('Tipo de usuário:', userType);
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    if (userType === 'professional') {
      console.log('Especialidade:', specialty);
    }
  };

  return (
    <div>
      <h1>Cadastrar</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userType">Tipo de usuário:</label>
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="patient">Paciente</option>
            <option value="professional">Profissional</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {userType === 'professional' && (
          <div>
            <label htmlFor="specialty">Especialidade:</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignUp;
