import React, { useState } from 'react';
import { sortState, filter, filterMyGames } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import GameCard from './GameCard';
import Pagination from './Pagination';
import '../assets/components/AllGames.scss';

const AllGames = ({ games, title, sortState, state, genres, filter, callAgain, filterMyGames }) => {
    //ORDENAMIENTO////////////////////////////////////////////////
    const handleOrderSelect = (type, state) => {
        console.log(type);
        return sortState(type, state);
    }

    //FILTRADO ///////////////////////////////////////////////////
    const handleFilterSelect = (type) => {
        filter(type, state);
    }

    const handleCall = (event) => {
        callAgain(event)
    }

    const handleFilterMyGames = (type, state) => {
        filterMyGames(type, state)
    }

    //PAGINADO///////////////////////////////////////
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(4);

    //Get current posts
    const indexLast = currentPage * gamesPerPage;
    const indexFirst = indexLast - gamesPerPage;
    const currentPost = games.slice(indexFirst, indexLast);
    
    //Change page
    const paginate = pageNumber => {setCurrentPage(pageNumber)}
    //PAGINADO////////////////////////////////////////////  

    return (
        <>
            {games.length > 0 ?
                <section className="allGames__container" >
                    <h3 className="allGames__title" >{title}</h3>
                    <div className="button__container">
                        <label>
                            <select onChange={(e) => handleOrderSelect(e.target.value, state)} className="select" >
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                                <option value="Rating">Rating  ⬆</option>
                                <option value="Rating Desc">Rating  ⬇ </option>
                            </select>
                        </label>
                        <label>
                            <select onChange={(e) => handleFilterSelect(e.target.value)} className="select" >
                                {genres !== undefined && (
                                    genres.map((g) => (
                                        <option value={g.name} key={g.id} >{g.name}</option>
                                    ))
                                )
                                }
                            </select>
                        </label>
                        {state === 'searchGames' &&
                            <label>
                                <select onChange={(e) => handleFilterMyGames(e.target.value, state)} className="select" >
                                    <option value="apiGames">API videojuegos</option>
                                    <option value="myGames" >Mis videojuegos</option>
                                </select>
                            </label>
                        }
                    </div>
                    {currentPost.map(g => {
                        return <GameCard games={g} key={g.id}/>
                    })}
                    <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate} />
                </section>
                :
                <section>
                    <h3 className="allGames__title" >{title}</h3>
                    <div className="notFound__container" >
                        <h4 className="notFound--title" >Ups, no se han encontrado videojuegos con esos requerimientos</h4>
                        <button className="notFound--button" onClick={(event) => handleCall(event)} >Cargar todos los juegos</button>
                    </div>
                </section>
            }
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sortState: (type, game) => { dispatch(sortState(type, game)) },
        filter: (type, state) => { dispatch(filter(type, state)) },
        filterMyGames: (type, state) => {dispatch(filterMyGames(type, state))}
    }
}

export default connect(null, mapDispatchToProps)(AllGames);