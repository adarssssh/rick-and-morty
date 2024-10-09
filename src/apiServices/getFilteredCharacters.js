// // api/getFilteredCharacters.js

import axios from 'axios';

const getFilteredCharacters = async (filters) => {
  let BaseURL = `https://rickandmortyapi.com/api/character/`;
  const queryParams = [];

  // Dynamically construct the query based on available filters
  if (filters.name && filters.name.trim() !== '') {
    queryParams.push(`name=${encodeURIComponent(filters.name)}`);
  }
  if (filters.status && filters.status.trim() !== '') {
    queryParams.push(`status=${encodeURIComponent(filters.status)}`);
  }
  if (filters.species && filters.species.trim() !== '') {
    queryParams.push(`species=${encodeURIComponent(filters.species)}`);
  }
  if (filters.type && filters.type.trim() !== '') {
    queryParams.push(`type=${encodeURIComponent(filters.type)}`);
  }
  if (filters.gender && filters.gender.trim() !== '') {
    queryParams.push(`gender=${encodeURIComponent(filters.gender)}`);
  }
  // Add pagination (page number) to the query
  if (filters.page && filters.page > 0) {
    queryParams.push(`page=${encodeURIComponent(filters.page)}`);
  }

  // Join the query parameters with '&' if there are any
  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  try {
    console.log(`${BaseURL}${queryString}`);
    const response = await axios.get(`${BaseURL}${queryString}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered characters:', error);
    return null; // Optionally, return null or some error-handling fallback
  }
};

export default getFilteredCharacters;
