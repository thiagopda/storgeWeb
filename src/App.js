import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CurrentUserContext from './providers/CurrentUserContext';
import Navbar from './components/Navbar';
import Routes from './routes';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <CurrentUserContext.Provider value={currentUser}>
          <Routes />
        </CurrentUserContext.Provider>
      </div>
    </Router>
  );
}

export default App;


/*
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
*/