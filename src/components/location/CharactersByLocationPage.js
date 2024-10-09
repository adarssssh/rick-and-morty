// src/components/CharactersByLocationPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getFilteredCharacters from '../../apiServices/getFilteredCharacters'; // Assuming you have this
import CharacterList from '../CharacterCard'; // Create this component

const CharactersByLocationPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const locationId = query.get('location');

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      // Fetch characters by location
      if (locationId) {
        const response = await getFilteredCharacters({ location: locationId });
        setCharacters(response.results);
      }
    };

    fetchCharacters();
  }, [locationId]);

  return (
    <div>
      <h2>Characters in Location ID: {locationId}</h2>
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharactersByLocationPage;
