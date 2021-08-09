import axios from 'axios';
export const GET_ALL_GAMES = 'GET_GAMES';
export const GET_GAME_BY_NAME = 'GET_GAME_BY_NAME';
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const CREATE_GAME = 'CREATE_GAME';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const GET_MY_GAMES = 'GET_MY_GAMES';
export const SORT_STATE = 'SORT_STATE';
export const FILTER = 'FILTER';
export const FILTER_MY_GAMES = 'FILTER_MY_GAMES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export function getAllGames() {
    return function(dispatch) {
        return axios.get(`/api/videogames/all`)
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
        return axios.get(`/api/videogames/myGames`)
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
        return axios.get(`/api/videogames?name=${query}`)
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
        return axios.get(`/api/videogames/${id}`)
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
        return axios.get(`/api/genres/all`)
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
        return axios.post('/api/videogames', form)
        .then((response) => {
            dispatch({
                type: CREATE_GAME,
                payload: response.data
            })
        })
    }
}

export function sortState(payload, state){
    return {
        type: SORT_STATE,
        payload,
        state
    }
}

export function filter(payload, state){
    return {
        type: FILTER,
        payload,
        state,
    }
}

export function filterMyGames(payload, state) {
    return {
        type: FILTER_MY_GAMES,
        payload,
        state
    }
}

export function addFavorite(payload) {
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export function deleteFavorite(payload){
    return {
        type: DELETE_FAVORITE,
        payload
    }
}