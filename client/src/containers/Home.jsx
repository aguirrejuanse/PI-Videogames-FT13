import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGames, getMyGames, getAllGenres } from '../store/actions/gameActions';
import AllGames from '../components/AllGames';
import Search from '../components/Search';


const Home = ({ games, getAllGames, myGames, getMyGames, genres, getAllGenres }) => {

    useEffect(() => {
        getAllGames();
        getMyGames();
        getAllGenres()
    }, [])
    //siempre esta pidiendo a la api

    return (
        <>
            <h2>Home</h2>
            <Search genres={genres} />
            {games !== undefined && (
                <AllGames title="Mira estos videojuegos" games={games} state={"allGames"} genres={genres} /> 
            )
            }

            {myGames !== undefined && (
                <AllGames title="Tus videojuegos creados" games={myGames} state={"myGames"} genres={genres} />
            )
            }
        </>
    )
}

const mapStateToProps = state => ({
    games: state.allGames,
    myGames: state.myGames,
    genres: state.allGenres
})

const mapDispatchToProps = dispatch => {
    return {
        getAllGames: game => { dispatch(getAllGames(game)) },
        getMyGames: game => { dispatch(getMyGames(game))},
        getAllGenres: genre => { dispatch(getAllGenres(genre))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);