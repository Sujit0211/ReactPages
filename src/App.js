import React from 'react';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
