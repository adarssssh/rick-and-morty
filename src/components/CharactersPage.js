import React, { useEffect, useState,  } from 'react';
import { useParams, useNavigate } from 'react-router-dom'


import getCharactersByPage from '../apiServices/getCharactersByPage';
import Pagination from './Pagination';
import CharacterList from './CharacterList';

import styles from '../styles/CharactersPage.module.css'
import CharacterFilter from './CharacterFilter';



const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
//   const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  



  const navigate = useNavigate();
  
  const { pageNumber } = useParams();
  const page = parseInt(pageNumber) || 1;

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharactersByPage(page);
      if (data && data.results) {
        setCharacters(data.results);
        setTotalPages(data.info.pages)
      }
    };
    console.log(`Page is called ${page}`)
    fetchCharacters();
  }, [page]);



  const handlePageChange = (newPage) => {
    navigate(`/characters/page/${newPage}`);
  };

  return (
    <div className={styles.container}>
      
      <h1>Rick & Morty Characters</h1>
      <CharacterFilter/>
      <CharacterList characters= {characters} />
      <Pagination 
        currentPage={page} 
        totalPages={totalPages}
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default CharactersPage;
