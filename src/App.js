
import React from 'react';
import styles from './app.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CharactersPage from './components/CharactersPage';
import CharacterProfile from './components/CharacterProfile';
import FilteredCharactersPage from './components/FilteredCharactersPage';
import Navbar from './components/Navbar';

import LocationsPage from './components/location/LocationsPage';
import CharactersByLocationPage from './components/location/CharactersByLocationPage';

const App = () => {
  return (
    <>
    <body>
    <Router>
    <Navbar />
    <div style={{ marginTop: '80px' }}>
      <Routes>

        <Route path="/characters/page/:pageNumber" element={<CharactersPage />} />
        <Route path="/" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterProfile />} />
        <Route path="/filtered-characters" element={<FilteredCharactersPage />} />

        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/location/page/:pageNumber" element={<LocationsPage />} />
        <Route path="/characters" element={<CharactersByLocationPage />} />
        
      </Routes>
    </div>
    </Router>
    
    </body>
      
      
    
      
    </>
  );
};

export default App;
