import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES, CREATE_GAME, CLEAR_DETAIL, GET_MY_GAMES, SORT_STATE } from '../actions/gameActions.js';
import { sortAsc, sortDesc, sortRating } from '../../order-functions/order-functions';

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
        case SORT_STATE:
            // console.log("Payload ", action.payload);
            // console.log("state es ", action.state);
            // console.log(`verifico que existe `, state.hasOwnProperty(action.state));
            switch (action.state) {
                //Primer switch
                case 'allGames':
                    console.log("estoy en allGames y state es ", action.state );
                    //Segundo switch
                    switch (action.payload) {
                        case 'Ascendente':
                            return {
                                ...state,
                                allGames: sortAsc([...state.allGames])
                            }
                        case 'Descendente':
                            return {
                                ...state,
                                allGames: sortDesc([...state.allGames])
                            }
                        case 'Rating':
                            return {
                                ...state,
                                allGames: sortRating([...state.allGames])
                            }
                        default:
                            return {
                                ...state
                            }
                    }
                //Primer switch
                case 'myGames':
                    console.log("estoy en myGames y state es ", action.state );
                    //Segundo switch
                    switch (action.payload) {
                        case 'Ascendente':
                            return {
                                ...state,
                                myGames: sortAsc([...state.myGames])
                            }
                        case 'Descendente':
                            return {
                                ...state,
                                myGames: sortDesc([...state.myGames])
                            }
                        case 'Rating':
                            return {
                                ...state,
                                myGames: sortRating([...state.myGames])
                            }
                        default:
                            return {
                                ...state
                            }
                    }
                default:
                    return {
                        ...state
                    }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;