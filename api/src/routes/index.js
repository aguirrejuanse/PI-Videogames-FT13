const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogames.js');
const genresRouter = require('./genre.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/videogames', videogamesRouter);
router.use('/api/genres', genresRouter);


module.exports = router;
