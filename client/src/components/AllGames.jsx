import React from 'react';
import GameCard from './GameCard';

const AllGames = ({ games, title }) => {
    return (
        <>
            {games?
                <section>
                    <h3>{title}</h3>
                    <div>
                        <label>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </label>
                        <label>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </label>
                        <button>
                            
                        </button>
                    </div>
                    {games.map(g => {
                        return <GameCard games={g} key={g.id}/>
                    })}
                </section>
                :
                <section>
                    <h3>{title}</h3>
                    <h4>No se han encontrado juegos</h4>
                </section>
            }
        </>
    )
}

export default AllGames;