// CharacterProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/CharacterProfile.module.css'; // Add some styling if needed

const CharacterProfile = () => {
  const { id } = useParams(); // Get character ID from URL
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      console.log(response)
      const data = await response.data;
      console.log(data)
      setCharacter(data);

      // Fetch episodes the character is featured in
      const episodeData = await Promise.all(
        data.episode.map((episodeUrl) => fetch(episodeUrl).then((res) => res.json()))
      );
      setEpisodes(episodeData);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className={styles.characterprofile}>
      <h1 className={styles.charactername}>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <div className={styles.characterdetails}>
        <p className={styles.ptag}><strong>Species:</strong> {character.species}</p>
        <p className={styles.ptag}><strong>Gender:</strong> {character.gender}</p>
        <p className={styles.ptag}><strong>Status:</strong> {character.status}</p>
        <p className={styles.ptag}><strong>Origin:</strong> {character.origin.name}</p>
        <p className={styles.ptag}><strong>Location:</strong> {character.location.name}</p>
      </div>
      <div className={styles.characterdetails}>
        <h3 className={styles.h3tag}>Origin and Location Details</h3>
        <p className={styles.ptag}><strong>Origin Name:</strong> {character.origin.name}</p>
        {/* Add logic to fetch dimension and resident details if available */}
        {/* <p><strong>Dimension:</strong> {dimension}</p> */}
        {/* <p><strong>Residents:</strong> {residentCount}</p> */}
        <p className={styles.ptag}><strong>Current Location:</strong> {character.location.name}</p>
      </div>
      <div className={styles.characterepisodes}>
        <h3 className={styles.h3tag}>Episodes Featured In</h3>
        <ul className={styles.ultag}>
          {episodes.map((episode) => (
            <li className={styles.ullitag} key={episode.id}>{episode.name} (Air Date: {episode.air_date})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterProfile;
