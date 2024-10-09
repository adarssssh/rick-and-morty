// src/components/LocationCard.js
// src/components/LocationCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from '../../styles/LocationCard.module.css';

const LocationCard = ({ location }) => {
  return (
    <div className={styles.card}>
      <h3>{location.name}</h3>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Residents: {location.residents.length}</p>
      {/* <Link to={`/characters?location=${location.id}`} className={styles.viewCharactersButton}>
        View Characters
      </Link> */}
    </div>
  );
};

export default LocationCard;

