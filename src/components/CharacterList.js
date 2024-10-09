import React from 'react';

import CharacterCard from './CharacterCard';
import styles from '../styles/CharacterList.module.css'; // Grid styles

const CharacterList = ({ characters }) => {
  return (
    
    <div className={styles.grid}>
        {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      
      </div>
      
      
    
  );
};

export default CharacterList;