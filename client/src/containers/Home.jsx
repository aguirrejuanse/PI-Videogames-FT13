import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGames, getMyGames } from '../store/actions/gameActions';
import AllGames from '../components/AllGames';
import Search from '../components/Search';


const Home = ({ games, getAllGames, myGames, getMyGames }) => {

    useEffect(() => {
        getAllGames();
        getMyGames();
    }, [])
    //siempre esta pidiendo a la api

    return (
        <>
            <h2>Home</h2>
            <Search />
            {games !== undefined && (
                <AllGames title="Mira estos videojuegos" games={games} /> 
            )
            }

            {myGames !== undefined && (
                <AllGames title="Tus videojuegos creados" games={myGames}/>
            )
            }
        </>
    )
}

const mapStateToProps = state => ({
    games: state.allGames,
    myGames: state.myGames
})

const mapDispatchToProps = dispatch => {
    return {
        getAllGames: game => { dispatch(getAllGames(game)) },
        getMyGames: game => { dispatch(getMyGames(game))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);