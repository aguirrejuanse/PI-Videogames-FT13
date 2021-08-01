import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllGenres, createGame } from '../store/actions/gameActions';
import '../assets/containers/Form.scss'

const Form = ({ genre, getAllGenres, createGame, history }) => {
    const [form, setValues] = useState({
        name: '',
        description: '',
        released: '',
        image: '',
        rating: 0,
        genres: [],
        platforms: [],
    });

    const platforms = ['PC', 'PlayStation 5', 'Xbox One', 'PlayStation 4', 'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android', 'Nintendo 3DS', 'Nintendo DS', 'Nintendo DSi', 'macOS'];

    const handleInput = event => {
        if(event.target.name === "genres" || event.target.name === "platforms"){
            const array = form[event.target.name];
            setValues({
                ...form,
                [event.target.name] : array.concat(event.target.value)
            })
        } else {
            setValues({
                ...form,
                [event.target.name]: event.target.value
            })
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const game = {
            name: form.name,
            description: form.description,
            released: form.released,
            rating: form.rating,
            image: form.image,
            genre: form.genres,
            platforms: form.platforms
        }
        createGame(game);
        setValues({
            name: '',
            description: '',
            released: '',
            image: '',
            rating: 0,
            genres: [],
            platforms: [],
        })
        alert('Has creado un juego, serás redirigido al Home');
        history.push('/home');
    }

    function getGenre(){
        getAllGenres();
    }


    useEffect(() => {
        getGenre()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (
        <>
        <section className="form-background" >
            <div className="form__container">
                <div className="form__container--header">
                    <h2>Crea tu videojuego</h2>
                    <Link to="/home">
                        <button>X</button>
                    </Link>
                </div>
                <form className="login__container--form" >
                    <div>
                        <label className="form--input-label"  htmlFor="name">Nombre: </label>
                        <input 
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={handleInput}
                        className="form--input"
                        />
                        
                    </div>
                    <div>
                        <label className="form--input-label" htmlFor="Descripción">Descripción: </label>
                        <input 
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={form.description}
                        onChange={handleInput}
                        className="form--input"
                        />
                        
                    </div>
                    <div>
                        <label className="form--input-label" htmlFor="Fecha de lanzamiento">Fecha de lanzamiento: </label>
                        <input 
                        type="date"
                        name="released"
                        placeholder="Fecha de lanzamiento"
                        value={form.released}
                        onChange={handleInput}
                        className="form--input"
                        />
                    </div>
                    <div>
                        <label className="form--input-label" htmlFor="Rating">Rating: </label>
                        <input 
                        type="number"
                        name="rating"
                        placeholder="Rating"
                        value={form.rating}
                        onChange={handleInput}
                        className="form--input"
                        />
                        
                    </div>
                    <div>
                        <label className="form--input-label" htmlFor="Imagen URL">Imagen URL: </label>
                        <input 
                        type="url"
                        name="image"
                        placeholder="Imagen URL"
                        value={form.image}
                        onChange={handleInput}
                        className="form--input"
                        />
                    </div>
                    <section className="form--container-list" >
                        <div id="container-checkbox">
                            <h3 className="form--container-title" >Elige un genero</h3>
                            {genre?
                            genre.map((g) => (
                                <div className="form--container-checkbox" key={g.id}>
                                    <input 
                                    type="checkbox"
                                    name="genres"
                                    value={g.name}
                                    onChange={handleInput}
                                    className="form--checkbox"
                                    />
                                    <h4>{g.name}</h4>

                                </div>
                            ))
                            :
                            <h2>Cargando generos</h2>
                            }
                        </div>
                        <div id="container-checkbox">
                            <h3  >Elige una plataforma</h3>
                            {platforms.map((p) => (
                                <div className="form--container-checkbox" key={p}>
                                    <input 
                                    type="checkbox"
                                    name="platforms"
                                    value={p}
                                    onChange={handleInput}
                                    />
                                    <h4>{p}</h4>
                                </div>
                            ))}
                        </div>
                    </section>
                    <button onClick={handleSubmit} className="button" >Crear</button>
                </form>
            </div>
        </section>
        </>
    )
}

const mapStateToProps = state => ({
    genre: state.allGenres
});

const mapDispatchToProps = dispatch => {
    return {
        getAllGenres: genre => { dispatch(getAllGenres(genre)) },
        createGame: game => { dispatch(createGame(game)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);