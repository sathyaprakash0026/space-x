import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import RocketsPage from './components/RocketsPage';
import LaunchesPage from './components/LaunchesPage';
import RocketPage from './components/RocketDetailsPage'; 
import CrewMembersPage from './components/CrewPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="/rockets/:id" element={<RocketPage />} />
        <Route path="/crew-members" element={<CrewMembersPage />} />


      </Routes>
    </Router>
  );
}

export default App;
