// Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfessionalDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        // Substitua com a URL correta do seu backend
        const response = await axios.get('http://localhost:3001/api/professional/appointments');
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        setError('Houve um erro ao carregar os agendamentos');
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <p>Carregando agendamentos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Data e Hora</th>
            <th>Paciente</th>
            <th>Especialidade</th>
            <th>Forma de Pagamento</th>
            <th>Valor</th>
            <th>Troco</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.dateAndTime}</td>
              <td>{appointment.patient}</td>
              <td>{appointment.specialty}</td>
              <td>{appointment.paymentMethod}</td>
              <td>{appointment.amount}</td>
              <td>{appointment.change}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessionalDashboard;
