const { Router } = require('express');

const genreCtr = require('../controllers/genres');
const router = Router();

// GET /genres
router.get('/all', genreCtr.getAllGenres);

module.exports = router;