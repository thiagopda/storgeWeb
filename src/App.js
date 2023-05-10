import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
         <Route exact path="/" element={<Home/>}/>
          <Route exact path="/search" element={Search} />
          <Route exact path="/signup" element={SignUp} />
          <Route exact path="/signin" element={SignIn} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

