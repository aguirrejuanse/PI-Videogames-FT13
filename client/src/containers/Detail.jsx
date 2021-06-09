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
                        <div className="cropped" >
                            <img src={game.image} alt={`Imagen del videojuego ${game.name}`}/>
                        </div>
                        :
                        <div className="cropped" >
                            <img src={game.background_image} alt={`Imagen del videojuego ${game.name}`} />
                        </div>
                    }
                    <div >
                        <div>
                            <h2 >{game.name}</h2>
                            <h3>Fecha de lanzamiento: {game.released}</h3>
                            <h3>Rating: {game.rating}</h3>
                            <Link to="/home" >
                                <button onClick={handleClick} >X</button>
                            </Link>
                        </div>
                        <div>
                            <div>
                                <ul>
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
                            <div>
                                <ul>
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
                        <p>{stripHtml(game.description)}</p>
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