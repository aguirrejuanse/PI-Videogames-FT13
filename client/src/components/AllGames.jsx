import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGames } from '../store/actions/gameActions';
import GameCard from './GameCard';

const AllGames = ({ games, getAllGames }) => {
    useEffect(() => {
        getAllGames();
    }, [games])
    
    return (
        <>
            {games?
                <section>
                    <h3>Soy una AllGames y estos son tus juegos</h3>
                    {games.map(g => {
                        return <GameCard games={g} key={g.id}/>
                    })}
                </section>
                :
                <div>
                    <h2>No se han encontrado juegos</h2>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => ({
    games: state.allGames
})

const mapDispatchToProps = dispatch => {
    return {
        getAllGames: game => { dispatch(getAllGames(game)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGames);