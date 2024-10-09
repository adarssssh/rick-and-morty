import axios from 'axios';

const getCharactersByPage = async (page = 1) => {
    let BaseURL = `https://rickandmortyapi.com/api/`
  try {
    const response = await axios.get(`${BaseURL}/character?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching paginated characters:", error);
  }
};

export default getCharactersByPage