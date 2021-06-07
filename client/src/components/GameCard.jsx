import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ games }) => {
    return (
        <>
            <h4>{games.name}</h4>
            {console.log("gameCard")}
            <Link to={`/home/detail/${games.id}`} >
                <button>
                    Ver detalles
                </button>
            </Link>
        </>
    )
}

export default GameCard;