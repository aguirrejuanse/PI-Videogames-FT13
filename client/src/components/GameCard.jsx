import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/GameCard.scss'

const GameCard = ({ games }) => {
    return (
        <div className="card">
            <img src={games.background_image} alt={`Imagen del videojuego ${games.name}`} className="card__image" />
            <div className="card__details" >
                <h4 className="card__details--title" >{games.name}</h4>
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
                    <button>
                        Ver detalles
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default GameCard;