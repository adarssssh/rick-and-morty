// components/FilteredCharactersPage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import CharacterList from './CharacterList';
import getFilteredCharacters  from '../apiServices/getFilteredCharacters';

import styles from '../styles/CharactersPage.module.css'
import CharacterFilter from './CharacterFilter';
import Pagination from './Pagination';





const FilteredCharactersPage = () => {
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: ''
    });
  
    const location = useLocation();
    const navigate = useNavigate();
  
    // Update filters based on URL parameters on initial render only
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const page = parseInt(params.get('page')) || 1;
      setCurrentPage(page);
  
      // Set filters from URL params only once
      setFilters({
        name: params.get('name') || '',
        status: params.get('status') || '',
        species: params.get('species') || '',
        type: params.get('type') || '',
        gender: params.get('gender') || ''
      });
    }, [location.search]);
  
    // Fetch characters based on currentPage and filters
    useEffect(() => {
      const fetchFilteredCharacters = async () => {
        const characters = await getFilteredCharacters({ ...filters, page: currentPage });
        setFilteredCharacters(characters.results);
        setInfo(characters.info);
      };
  
      fetchFilteredCharacters();
    }, [filters, currentPage]); // Only run when filters or currentPage change
  
    // Update the page and modify URL when pagination changes
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= info.pages) {
          setCurrentPage(newPage);
      
          // Create URLSearchParams object and add 'page' first
          const params = new URLSearchParams();
          params.set('page', newPage); // Always set 'page' first
      
          // Now add non-empty filters after 'page'
          Object.keys(filters).forEach(key => {
            if (filters[key]) {  // Only include non-empty filters
              params.set(key, filters[key]);
            }
          });
      
          // Update URL with page first, then filters
          navigate(`/filtered-characters?${params.toString()}`);
        }
      };

  return (
    <div className={styles.container}>
      <h1>Filtered Characters</h1>
      
      <div className="character-grid">
      <CharacterList characters= {filteredCharacters} />    
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={info.pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default FilteredCharactersPage;
