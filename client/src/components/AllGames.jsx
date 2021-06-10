import React, { useState } from 'react';
import { sortState } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import GameCard from './GameCard';
import Pagination from './Pagination';

const AllGames = ({ games, title, sortState, state, genres }) => {
    //ORDENAMIENTO////////////////////////////////////////////////
    const handleOrderSelect = (type, state) => {
        console.log(type);
        return sortState(type, state);
    }

    //FILTRADO ///////////////////////////////////////////////////
    const handleFilterSelect = (type) => {
        console.log(type);
        //con este accedo pero no logro obtenerlo
        let filtro = games.filter((game) => game.genres.forEach(g => {
            console.log(g.name.includes(type))
            if(g.name === type) return true;
            return false;
            }
        ))
        console.log(filtro);
    }

    //PAGINADO///////////////////////////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(6);

    //Get current posts
    const indexLast = currentPage * gamesPerPage;
    const indexFirst = indexLast - gamesPerPage;
    const currentPost = games.slice(indexFirst, indexLast);
    
    //Change page
    const paginate = pageNumber => {setCurrentPage(pageNumber)}
    //PAGINADO////////////////////////////////////////////  

    return (
        <>
            {games?
                <section>
                    <h3>{title}</h3>
                    <div>
                        <label>
                            <select onChange={(e) => handleOrderSelect(e.target.value, state)} >
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                                <option value="Rating">Rating  ⬆</option>
                                <option value="Rating Desc">Rating  ⬇ </option>
                            </select>
                        </label>
                        <label>
                            <select onChange={(e) => handleFilterSelect(e.target.value)} >
                                {genres !== undefined && (
                                    genres.map((g) => (
                                        <option value={g.name} key={g.id} >{g.name}</option>
                                    ))
                                )
                                }
                            </select>
                        </label>
                    </div>
                    {currentPost.map(g => {
                        return <GameCard games={g} key={g.id}/>
                    })}
                    <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate} />
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

const mapDispatchToProps = dispatch => {
    return {
        sortState: (type, game) => { dispatch(sortState(type, game)) }
    }
}

export default connect(null, mapDispatchToProps)(AllGames);