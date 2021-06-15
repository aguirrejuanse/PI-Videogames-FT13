import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGenres, createGame } from '../store/actions/gameActions';
import '../assets/containers/Form.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    },[]);
    
    return (
        <>
        <Header />
        <section className="form-background" >
            <div className="form__container">
                <h2>Crea tu videojuego</h2>
                <form className="login__container--form" >
                    <div>
                        
                        <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleInput}
                        className="form--input"
                        />
                        
                    </div>
                    <div>
                        
                        <input 
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleInput}
                        className="form--input"
                        />
                        
                    </div>
                    <div>
                        
                        <input 
                        type="date"
                        name="released"
                        placeholder="Released"
                        value={form.released}
                        onChange={handleInput}
                        className="form--input"
                        />
                    </div>
                    <div>
                                
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
                        <input 
                        type="url"
                        name="image"
                        placeholder="Imagen"
                        value={form.image}
                        onChange={handleInput}
                        className="form--input"
                        />
                    </div>
                    <section className="form--container-list" >
                        <div>
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
                        <div>
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
        <Footer />
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