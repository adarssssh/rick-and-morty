// src/api/getLocations.js
import axios from 'axios';

const getLocations = async (page = 1) => {
  try {
    console.log(`https://rickandmortyapi.com/api/location?page=${page}`)
    const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return { results: [] };
  }
};

export default getLocations;
