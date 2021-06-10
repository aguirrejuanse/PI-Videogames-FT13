import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getGameByName } from '../store/actions/gameActions'
import AllGames from './AllGames';

const Search = ({ games, getGameByName, genres}) => {
    const [description, setDescription] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        getGameByName(description);
    }

    return (
        <>
            <h2>Busca un videojuego</h2>
            <form >
                <input 
                    name='game'
                    type='text'
                    placeholder='Busca un videojuego...'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button onClick={handleSubmit} > Buscar </button>
            </form>
            {games !== undefined && (
                <AllGames title={`Estos son todos los videojuegos que incluyen ${description}`} games={games} state={"searchGames"} genres={genres} />
            )}
            {/* {games?
                games.map(g => {
                    {console.log("search")}
                    return <GameCard games={g} key={g.id}/>
                }) 
                :
                <>
                </>
            } */}
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