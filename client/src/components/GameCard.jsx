import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite } from '../store/actions/gameActions';
import '../assets/components/GameCard.scss'

const GameCard = ({ games, addFavorite, state }) => {
    
    const handleFavorite = game => {
        addFavorite(game);
    }
    
    return (
        <div className="card">
            {games.image?
                <img src={games.image} alt={`Imagen del videojuego ${games.name}`} className="card__image" />
                :
                <img src={games.background_image} alt={`Imagen del videojuego ${games.name}`} className="card__image" />
            }
            <div className="card__details" >
                <h4 className="card__details--title" >{games.name}</h4>
                <h5 className="card__details--title" >Rating: {games.rating}</h5>
                {games.genres?
                    <ul>
                        {games.genres.map(g => (
                            <li key={g.id} className="card__details--list" >{g.name}</li>
                        ))}
                    </ul> :
                    <ul>
                        <li className="card__details--list">No está asociado a ningun genero</li>
                    </ul>
                }
                <Link to={`/home/detail/${games.id}`} >
                    <button className="card__details--button" >
                        Ver detalles
                    </button>
                </Link>
                {console.log(state)}
                {state === 'favorites' ?
                    <button className="card__details--button-favorite" onClick={() => handleFavorite(games)}>Eliminar de favoritos</button>
                    :
                    <button className="card__details--button-favorite" onClick={() => handleFavorite(games)}>Añadir a favoritos</button>
                }
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (game) => { dispatch(addFavorite(game)) }
    }
}

export default connect(null, mapDispatchToProps)(GameCard);