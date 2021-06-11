import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getGameById, clearDetail } from '../store/actions/gameActions';
import '../assets/containers/Detail.scss'

const Detail = ({ game, getGameById, clearDetail }) => {
    const { idGame } = useParams();

    function getGame(id){
        getGameById(id);
    }

    useEffect(() => {
        getGame(idGame)
    },[]);

    const handleClick = () => {
        clearDetail()
    }

    function stripHtml(html){
        // Crea un nuevo elemento div
        var temporalDivElement = document.createElement("div");
        // Establecer el contenido HTML con el dado
        temporalDivElement.innerHTML = html;
        // Recuperar la propiedad de texto del elemento (compatibilidad con varios navegadores)
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }

    return (
        <>
            {game?
            <div className="background">
                <div className="container" >
                    {game.image?
                        <div className="cropped" style={{backgroundImage: `url(${game.image})`}}  >
                            {/* <img src={game.image} alt={`Imagen del videojuego ${game.name}`}/> */}
                            <h2 className="card__details--title" >{game.name}</h2>
                        </div>
                        :
                        <div className="cropped" >
                            {/* <img src={game.background_image} alt={`Imagen del videojuego ${game.name}`} /> */}
                            <h2 className="card__details--title" >{game.name}</h2>
                        </div>
                    }
                    <div >
                        <div>
                            <div className="card__details--title__container">
                                {/* <h2 className="card__details--title" >{game.name}</h2> */}
                                <Link to="/home" >
                                    <button onClick={handleClick} >X</button>
                                </Link>
                            </div>
                            <div className="card__details--subtitle__container">
                                <h3 className="card__details--subtitle">Fecha de lanzamiento: {game.released}</h3>
                                <h3 className="card__details--subtitle" >Rating: {game.rating}</h3>
                            </div>
                        </div>
                        <div className="card__details--list__container" >
                            <div>
                                <ul className="card__details--list">
                                    Generos:
                                    {game.genres?
                                    game.genres.map((g) => (
                                        <li key={g.id} >{g.name}</li>
                                    ))
                                    :
                                    <li>No está asociado a un genero</li>
                                    }
                                </ul>
                            </div>
                            <div >
                                <ul className="card__details--list" >
                                    Plataformas:
                                    {game.id.length > 9 && 
                                        game.platforms.map((p) => (
                                            <li key={p}>{p}</li>
                                        ))
                                    }
                                    {game.id.length < 9 &&
                                        // game.platforms?
                                        game.platforms.map((p) => (
                                            <li key={p.platform.id} >{p.platform.name}</li>
                                        ))
                                        // :
                                        // <li>No está asociado a un genero</li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <p className="card_details--description">{stripHtml(game.description)}</p>
                    </div>
                </div>
            </div>
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
        getGameById: game => { dispatch(getGameById(game)) },
        clearDetail: () => {dispatch(clearDetail()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);