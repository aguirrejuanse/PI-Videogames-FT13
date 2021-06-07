require('dotenv').config();
const { API_KEY } = process.env;

const BASE_URL = 'https://api.rawg.io/api/';
const VIDEOGAMES_URL = `${BASE_URL}games?key=${API_KEY}`


module.exports = {
    BASE_URL,
    VIDEOGAMES_URL
}