import { GET_ALL_GAMES, GET_GAME_BY_NAME, GET_GAME_BY_ID, GET_ALL_GENRES, CREATE_GAME, CLEAR_DETAIL, GET_MY_GAMES, SORT_STATE, FILTER, FILTER_MY_GAMES, ADD_FAVORITE, DELETE_FAVORITE } from '../actions/gameActions.js';
import { sortAsc, sortDesc, sortRatingAsc, sortRatingDesc, filterBy } from '../../order-functions/order-functions';

export const initialState = {
    allGames: undefined,
    searchGames: undefined,
    idGame: undefined,
    allGenres: undefined,
    createdGame: undefined,
    myGames: undefined,
    favorites: []
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
        case FILTER:
            console.log(action.state);
            console.log(action)
            switch (action.state) {
                case 'allGames':
                    return {
                        ...state,
                        allGames: filterBy(state.allGames, action.payload)
                    }
                case 'myGames':
                    return {
                        ...state,
                        myGames: filterBy(state.myGames, action.payload)
                    }
                case 'searchGames':
                    return {
                        ...state,
                        searchGames: filterBy(state.searchGames, action.payload)
                    }
                case 'favorites':
                    return {
                        ...state,
                        favorites: filterBy(state.favorites, action.payload)
                    }
                default:
                    return {
                        ...state
                    }
            }
        case FILTER_MY_GAMES:
            console.log(action.payload);
            console.log(action.state);
            switch (action.payload) {
                case 'myGames':
                    return {
                        ...state,
                        searchGames: state.searchGames.filter(g => g.id.toString().length > 9)
                    }
                case 'apiGames':
                    return {
                        ...state,
                        searchGames: state.searchGames.filter(g => g.id.toString().length < 9)
                    }
                default:
                    return {
                        ...state
                    }
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
                                allGames: sortRatingAsc([...state.allGames])
                            }
                        case 'Rating Desc':
                            return {
                                ...state,
                                allGames: sortRatingDesc([...state.allGames])
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
                                myGames: sortRatingAsc([...state.myGames])
                            }
                        case 'Rating Desc':
                            return {
                                ...state,
                                myGames: sortRatingDesc([...state.myGames])
                            }
                        default:
                            return {
                                ...state
                            }
                    }
                //Primer switch
                case 'searchGames':
                    console.log("estoy en searchGames y state es ", action.state );
                    //Segundo switch
                    switch (action.payload) {
                        case 'Ascendente':
                            return {
                                ...state,
                                searchGames: sortAsc([...state.searchGames])
                            }
                        case 'Descendente':
                            return {
                                ...state,
                                searchGames: sortDesc([...state.searchGames])
                            }
                        case 'Rating':
                            return {
                                ...state,
                                searchGames: sortRatingAsc([...state.searchGames])
                            }
                        case 'Rating Desc':
                            return {
                                ...state,
                                searchGames: sortRatingDesc([...state.searchGames])
                            }
                        default:
                            return {
                                ...state
                            }
                    }
                case 'favorites':
                console.log("estoy en favorites y state es ", action.state );
                //Segundo switch
                switch (action.payload) {
                    case 'Ascendente':
                        return {
                            ...state,
                            favorites: sortAsc([...state.favorites])
                        }
                    case 'Descendente':
                        return {
                            ...state,
                            favorites: sortDesc([...state.favorites])
                        }
                    case 'Rating':
                        return {
                            ...state,
                            favorites: sortRatingAsc([...state.favorites])
                        }
                    case 'Rating Desc':
                        return {
                            ...state,
                            favorites: sortRatingDesc([...state.favorites])
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
        case ADD_FAVORITE:

            return {
                ...state,
                favorites: [...state.favorites.filter(game => game.id !== action.payload.id), action.payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.filter(game => game.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;