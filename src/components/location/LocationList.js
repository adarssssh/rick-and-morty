import React from 'react';
import styles from '../../styles/LocationCard.module.css'; // Adjust based on your CSS
import { Link } from 'react-router-dom';

const LocationList = ({ locations }) => {
  return (
    <div className={styles.locationGrid}>
      {locations.map((location) => (
        <div className={styles.card}>
        <h3>{location.name}</h3>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Residents: {location.residents.length}</p>
        <Link to={`/characters?location=${location.id}`} className={styles.viewCharactersButton}>
        View Characters
        </Link>

        {/* <LocationCard key={location.id} location={location} /> */}
    </div>
      ))}
    </div>
  );
};

export default LocationList;
