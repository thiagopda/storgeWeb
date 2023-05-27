import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('paciente');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3001/api/auth/${userType}`, {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      // Redirecionar para a página inicial ou dashboard
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Mostrar mensagem de erro ao usuário
    }
  };

  return (
    <div>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="userType">Tipo de usuário:</label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="paciente">Paciente</option>
          <option value="profissional">Profissional de Saúde</option>
        </select>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default SignIn;
