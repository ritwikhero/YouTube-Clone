import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const apiKey = import.meta.env.VITE_RAPID_API_KEY; // Corrected for Vite

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

// Log the API key to verify (remove this in production)
// console.log('API Key:', apiKey);

// Fetch data from API
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Ensure you handle errors appropriately
  }
};