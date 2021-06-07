require('dotenv').config();
const { API_KEY } = process.env;
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const { Op } = require('sequelize');
const { VIDEOGAMES_URL, BASE_URL } = require('../constants');
const { Genre, Videogame } = require('../db.js');

class ModelCrud {
    constructor(model){
        this.model = model;
    }
    //busca en la API
    getAllVideogames = async (req, res, next) => {
        try {
            const apiGame = await axios.get(VIDEOGAMES_URL);
            const results = apiGame.data.results
            console.log(results.length)
            res.send(results);
        } catch (error) {
            res.send(error);
        }
    }

    getByName = async (req, res, next) => {
        let name = req.query.name;
        name = name.replace(/["']/g, "");
        console.log("Busco este juego ", name);
        const myGame = await this.model.findAll({
            include: [{
                model: Genre,
                as: 'genre',
                attributes: ['id', 'name']
            }],
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        console.log("Base de datos");
        console.log(myGame);

        const apiGame = await axios.get(`${VIDEOGAMES_URL}&search={${name}}`);
        console.log("API");
        console.log(apiGame.data.results.length);
        Promise.all([myGame, apiGame])
            .then((results) => {
                const [myGameResults, apiGameResults] = results;
                const response = myGameResults.concat((apiGameResults.data.results));
                console.log('RESPONSE')
                console.log(response.length)
                res.send(response);
            })
            .catch((error) => next(error));
    }

    getById = async (req, res, next) => {
        const id = req.params.id;
        console.log(id)
        if(id.length > 9){
            console.log("entre");
            const game = await this.model.findByPk(id, {
                include: [{
                    model: Genre,
                    as: 'genre',
                    attributes: ['id, name']
                }]
            })
            if(game) return res.send(game);
            return res.send('No se encontro ese videojuego en la BD');
    } else {
        const apiGame = await axios.get(`${BASE_URL}games/${id}?key=${API_KEY}`);
        if(apiGame){
            const game = {
                name: apiGame.data.name,
                description: apiGame.data.description,
                released: apiGame.data.released,
                rating: apiGame.data.rating,
                platforms: apiGame.data.platforms,
                genres: apiGame.data.genres
            }
            return res.send(game);
        } else {
            return res.send('No se encontro esa videojuego en la API');
        }
    }
    }

    post = async (req, res, next) => {
        const {name, description, released, rating, platforms, genre} = req.body;
        this.model.create({
            name,
            description,
            released,
            rating,
            platforms,
            id: uuidv4(),
            genre: {
                name: genre,
                id: uuidv4()
            }
        }, {
            include: [{
                model: Genre,
                as: 'genre'
            }]
        })
        .then((createdGame) => res.send(createdGame))
        .catch((error) => next(error));
    }

    getAllGenres = async (req, res, next) => {
        //Incluir videojuegos asociados?
        try {
            const apiGenres = await axios.get(`${BASE_URL}genres?key=${API_KEY}`)
            const api = apiGenres.data.results;
            // console.log("API");
            // console.log(api.map(g => {g.name}));
            api.forEach(async (g) => {
                await Genre.findOrCreate({
                    where: {
                        name: g.name,
                        // videogame: {
                        //     id: g.games[0].id,
                        //     name: g.games[0].name
                        // }
                        
                    }
                    // include: [{
                    //     model: Videogame,
                    //     as: 'videogame',
                    //     attributes: ['id', 'name']
                    // }]
                })
            })
            const find = await this.model.findAll();
            console.log(find.length);
            // if(find.length === 19) return res.send
            res.send(find);
        } catch (error) {
            res.sendStatus(error);
        }
    }
}

module.exports = ModelCrud;