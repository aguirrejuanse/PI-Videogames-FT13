import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGenres } from '../store/actions/gameActions';

const Form = ({ genre, getAllGenres }) => {
    const [form, setValues] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genres: '',
        platforms: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
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
                <input 
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleInput} 
                />
                <input 
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleInput} 
                />
                <input 
                type="date"
                name="released"
                placeholder="Released"
                value={form.released}
                onChange={handleInput} 
                />
                <input 
                type="number"
                name="rating"
                placeholder="Rating"
                value={form.rating}
                onChange={handleInput} 
                />
                {/* <label>
                    <h3 className="diet">Elige una genero</h3>
                    <select name="genres" value={form.genres} className="input" onChange={handleInput} >
                        <option value="Action">Action</option>
                        <option value="Indie">Indie</option>
                        <option value="Adventure">Adventure</option>
                        <option value="RPG">RPG</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Shooter">Shooter</option>
                        <option value="Casual">Casual</option>
                        <option value="Simulation">Simulation</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Arcade">Arcade</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Racing">Racing</option>
                        <option value="Massively Multiplayer">Massively Multiplayer</option>
                        <option value="Sports">Sports</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Family">Family</option>
                        <option value="Board Games">Board Games</option>
                        <option value="Educational">Educational</option>
                        <option value="Card">Card</option>
                    </select>
                </label> */}
                
                
            </form>
        </>
    )
}

const mapStateToProps = state => ({
    genre: state.allGenres
});

const mapDispatchToProps = dispatch => {
    return {
        getAllGenres: genre => { dispatch(getAllGenres(genre)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);