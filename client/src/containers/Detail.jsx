import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getGameById } from '../store/actions/gameActions';

const Detail = ({ game, getGameById }) => {
    const { idGame } = useParams();

    function getGame(id){
        getGameById(id);
    }

    useEffect(() => {
        getGame(idGame)
    },[]);

    return (
        <>
            <h1>Soy detail</h1>
            {game?
            <>
                <h2>{game.name}</h2>
                <Link to="/home" >
                    <h2>X</h2>
                </Link>
                {console.log("detail")}
            </>
                :
                <h2>Cargando</h2>
            }
        </>
    )
}

const mapStateToProps = state => ({
    game: state.idGame
});

const mapDispatchToProps = dispatch => {
    return {
        getGameById: game => { dispatch(getGameById(game)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);