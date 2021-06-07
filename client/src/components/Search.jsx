import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getGameByName } from '../store/actions/gameActions'
import GameCard from './GameCard';

const Search = ({ games, getGameByName}) => {
    const [description, setDescription] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        getGameByName(description);
    }

    return (
        <>
            <h2>Soy Search</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name='game'
                    type='text'
                    placeholder='Busca un videojuego...'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                {/* <button onClick={(e) => setDescription(e.target.value)} > Buscar </button> */}
            </form>
            {games?
                games.map(g => {
                    {console.log("search")}
                    return <GameCard games={g} key={g.id}/>
                }) 
                :
                <>
                </>
            }
        </>
    )
}

const mapStateToProps = state => ({
    games: state.searchGames
})

const mapDispatchToProps = dispatch => {
    return {
        getGameByName: game => { dispatch(getGameByName(game)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);