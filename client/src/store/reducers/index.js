import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES } from '../actions/gameActions.js';

const initialState = {
    allGames: undefined,
    searchGames: undefined,
    idGame: undefined,
    allGenres: undefined
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_GAME_BY_NAME:
            return {
                ...state,
                searchGames: action.payload
            }
        case GET_GAME_BY_ID:
            return {
                ...state,
                idGame: action.payload
            }
        case GET_ALL_GENRES:
                return {
                    ...state,
                    allGenres: action.payload
                }
        default:
            return {
                ...state
            }
    }
}

export default reducer;