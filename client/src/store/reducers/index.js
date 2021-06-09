import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES, CREATE_GAME, CLEAR_DETAIL, GET_MY_GAMES } from '../actions/gameActions.js';

const initialState = {
    allGames: undefined,
    searchGames: undefined,
    idGame: undefined,
    allGenres: undefined,
    createdGame: undefined,
    myGames: undefined,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_MY_GAMES:
            if(typeof action.payload === 'string') {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    myGames: action.payload
                }
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
        case CLEAR_DETAIL:
            return {
                ...state,
                idGame: undefined
            }
        case GET_ALL_GENRES:
                return {
                    ...state,
                    allGenres: action.payload
                }
        case CREATE_GAME:
            return {
                ...state,
                createdGame: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;