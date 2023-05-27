import React, { useState } from 'react';
import axios from 'axios';

const AppointmentBooking = () => {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [professional, setProfessional] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const specialties = [
    "Acompanhamento pós cirúrgico hospitalar",
    "Acompanhamento pós cirúrgico homecare",
    "Aplicação de medicação",
    "Curativo",
    "PIC",
    "Retirada de pontos",
    "Troca e limpeza de cateteres"
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:3001/appointments', {
        patientName,
        date,
        time,
        specialty,
        professional
      });
      console.log(response.data);
      // Handle successful response
    } catch (err) {
      setError(err.message);
      // Handle error response
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Agendar Consulta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Paciente:
          <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)} required />
        </label>
        <label>
          Data:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </label>
        <label>
          Horário:
          <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
        </label>
        <label>
          Especialidade:
          <select value={specialty} onChange={e => setSpecialty(e.target.value)} required>
            <option value="">Selecione uma especialidade</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>{specialty}</option>
            ))}
          </select>
        </label>
        <label>
          Profissional:
          <input type="text" value={professional} onChange={e => setProfessional(e.target.value)} required />
        </label>
        <button type="submit">Agendar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}
    </div>
  );
};

export default AppointmentBooking;
