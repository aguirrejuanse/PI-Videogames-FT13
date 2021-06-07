const { Videogame, Genre, Video_Genre } = require('../db.js');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const ModelCrud = require('./index');

class videogameModel extends ModelCrud {
    constructor(model){
        super(model)
    }


}

const videogameCtr = new videogameModel(Videogame);

module.exports = videogameCtr;