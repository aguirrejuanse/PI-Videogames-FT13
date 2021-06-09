import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGenres, createGame } from '../store/actions/gameActions';

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
            <h1>Soy form</h1>
            <form>
                <div>
                    
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleInput} 
                    />
                    
                </div>
                <div>
                    
                    <input 
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleInput} 
                    />
                    
                </div>
                <div>
                    
                    <input 
                    type="date"
                    name="released"
                    placeholder="Released"
                    value={form.released}
                    onChange={handleInput} 
                    />
                </div>
                <div>
                            
                    <input 
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={form.rating}
                    onChange={handleInput} 
                    />
                    
                </div>
                <div>
                    <input 
                    type="url"
                    name="image"
                    placeholder="Imagen"
                    value={form.image}
                    onChange={handleInput} 
                    />
                </div>
                <div>
                    <label>Elige un genero</label>
                    {genre?
                    genre.map((g) => (
                        <div>
                            <h4>{g.name}</h4>
                            <input 
                            type="checkbox"
                            name="genres"
                            value={g.name}
                            onChange={handleInput}
                            />

                        </div>
                    ))
                    :
                    <h2>Cargando generos</h2>
                    }
                </div>
                <div>
                    <label>Elige una plataforma</label>
                    {platforms.map((p) => (
                        <div>
                            <h4>{p}</h4>
                            <input 
                            type="checkbox"
                            name="platforms"
                            value={p}
                            onChange={handleInput}
                            />
                        </div>
                    ))}
                </div>
                <button onClick={handleSubmit} >Crear</button>
            </form>
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