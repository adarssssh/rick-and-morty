import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getFilteredCharacters from '../apiServices/getFilteredCharacters';
import styles from '../styles/Filter.module.css';

import CharacterList from './CharacterList';


const CharacterFilter = () => {
    const [filters, setFilters] = useState({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
    });
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const navigate = useNavigate();
  
    const handleFilterChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
  
    const handleFilterSubmit = async (e) => {
        e.preventDefault();
        const data = await getFilteredCharacters(filters);
        if (data && data.results) {
          setFilteredCharacters(data.results);
        }
      
  
      // Construct the query string from the filters
      const queryString = Object.entries(filters)
        .filter(([_, value]) => value) // Filter out empty values
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
  
      // Redirect to the new route with query parameters only if there are filters
      if (queryString) {
        navigate(`/filtered-characters?${queryString}`);
      }
    };

  return (
    <>
    <div className={styles.filterContainer}>
      <form onSubmit={handleFilterSubmit} className={styles.filterForm}>
        <input
          type="text"
          name="name"
          placeholder="Character Name"
          value={filters.name}
          onChange={handleFilterChange}
          className={styles.filterInput}
        />
        
        <select name="status" value={filters.status} onChange={handleFilterChange} className={styles.filterSelect}>
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        
        <select name="species" value={filters.species} onChange={handleFilterChange} className={styles.filterSelect}>
          <option value="">All Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          {/* Add more species as needed */}
        </select>
        
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={filters.type}
          onChange={handleFilterChange}
          className={styles.filterInput}
        />
        
        <select name="gender" value={filters.gender} onChange={handleFilterChange} className={styles.filterSelect}>
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <button type="submit" className={styles.filterButton}>Filter</button>
      </form>
      
     
    </div>
    
        {/* <CharacterList characters={filteredCharacters} /> */}
      
     
   </>
  );
};

export default CharacterFilter;
