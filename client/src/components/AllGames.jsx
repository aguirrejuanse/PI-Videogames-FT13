import React from 'react';
import { sortState } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import GameCard from './GameCard';

const AllGames = ({ games, title, sortState, state }) => {

    //ORDENAMIENTO////////////////////////////////////////////////
    const handleOrderSelect = (type, state) => {
        console.log(type);
        return sortState(type, state);
        // if(type === 'Ascendente') return sortAsc(games);
        // if(type === 'Descendente') return sortDesc(games);
        // if(type === 'Rating') return sortRating(games);
    }

    return (
        <>
            {games?
                <section>
                    <h3>{title}</h3>
                    <div>
                        <label>
                            <select onChange={(e) => handleOrderSelect(e.target.value, state)} >
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                                <option value="Rating">Rating</option>
                            </select>
                        </label>
                        <label>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </label>
                        <button>
                            
                        </button>
                    </div>
                    {games.map(g => {
                        return <GameCard games={g} key={g.id}/>
                    })}
                </section>
                :
                <section>
                    <h3>{title}</h3>
                    <h4>No se han encontrado juegos</h4>
                </section>
            }
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sortState: (type, game) => { dispatch(sortState(type, game)) }
    }
}

export default connect(null, mapDispatchToProps)(AllGames);