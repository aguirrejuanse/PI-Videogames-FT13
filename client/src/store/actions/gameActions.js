import axios from 'axios';
import { GAME_URL, GENRE_URL } from '../../constants.js';
export const GET_ALL_GAMES = 'GET_GAMES';
export const GET_GAME_BY_NAME = 'GET_GAME_BY_NAME';
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const CREATE_GAME = 'CREATE_GAME';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const GET_MY_GAMES = 'GET_MY_GAMES';

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

export function getMyGames() {
    return function(dispatch) {
        return axios.get(`${GAME_URL}myGames`)
        .then((response) => {
            dispatch({
                type: GET_MY_GAMES,
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

export function clearDetail() {
    return {
        type: CLEAR_DETAIL
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

export function createGame(form) {
    return function(dispatch){
        return axios.post(GAME_URL, form)
        .then((response) => {
            dispatch({
                type: CREATE_GAME,
                payload: response.data
            })
        })
    }
}