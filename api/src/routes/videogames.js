const { Router } = require('express');

const videogamesCtr = require('../controllers/videogames');
const router = Router();

// GET /videogames?name="..." 
router.get('/', videogamesCtr.getByName);

// GET /videogames
router.get('/all', videogamesCtr.getAllVideogames);

// GET /
router.get('/myGames', videogamesCtr.getMyGames);

// GET /videogames/{idVideogame}
router.get('/:id', videogamesCtr.getById);

// POST /videogame
router.post('/', videogamesCtr.post);


module.exports = router;