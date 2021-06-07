import axios from 'axios';
import { BASE_URL, GAME_URL, GENRE_URL } from '../../constants.js';
export const GET_ALL_GAMES = 'GET_GAMES';
export const GET_GAME_BY_NAME = 'GET_GAME_BY_NAME';
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';

export function getAllGames() {
    return function(dispatch) {
        return axios.get(`${GAME_URL}all`)
        .then((response) => {
            dispatch({
                type: GET_ALL_GAMES,
                payload: response.data
            })
        })
    }
}

export function getGameByName(query) {
    return function(dispatch) {
        return axios.get(`${GAME_URL}?name=${query}`)
        .then((response) => {
            dispatch({
                type: GET_GAME_BY_NAME,
                payload: response.data
            })
        })
    }
}

export function getGameById(id) {
    return function(dispatch) {
        return axios.get(`${GAME_URL}${id}`)
        .then((response) => {
            dispatch({
                type: GET_GAME_BY_ID,
                payload: response.data
            })
        })
    }
}

export function getAllGenres(){
    return function(dispatch){
        return axios.get(`${GENRE_URL}all`)
        .then((response) => {
            dispatch({
                type: GET_ALL_GENRES,
                payload: response.data
            })
        })
    }
}