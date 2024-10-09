import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CharacterCard.module.css'; 

const CharacterCard = ({ character }) => {
  return (
    
    
    <div className={styles.card} >
      
      <img src={character.image} alt={character.name} />
      <div>
      <Link to={`/character/${character.id}`}> Character Profile</Link>
      </div>
      

      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
    
  );
};

export default CharacterCard;