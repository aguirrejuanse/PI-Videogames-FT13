import axios from 'axios';

export const BASE_URL = axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001/api';
export const GAME_URL = `${BASE_URL}videogames/`;
export const GENRE_URL = `${BASE_URL}genres/`