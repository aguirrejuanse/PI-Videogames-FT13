const { Genre } = require('../db.js');
const ModelCrud = require('./index');

const genreCtr = new ModelCrud(Genre);


module.exports = genreCtr;