import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getGameByName } from '../store/actions/gameActions'
import AllGames from './AllGames';
import '../assets/containers/Search.scss';

const Search = ({ games, getGameByName, genres}) => {
    const [description, setDescription] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        getGameByName(description);
    }

    return (
        <>
        <section className="search-background" >
            <h2>Busca un videojuego</h2>
            <div >
                <form className="search--container" >
                    <input 
                        name='game'
                        type='text'
                        placeholder='Busca un videojuego...'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="search--input"
                    />
                    <button onClick={handleSubmit} className="search--button" > Buscar </button>
                </form>
            </div>
        </section>
        {games !== undefined && (
            <AllGames title={`Estos son todos los videojuegos que incluyen ${description}`} games={games} state={"searchGames"} genres={genres} callAgain={handleSubmit} />
        )}
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