const { Videogame, Genre ,conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    let game = {
      name: 'Super Mario Bros',
      id: 1,
      platforms: ['Nintendo DSi', 'Wii'],
      description: 'Nuevo Super Mario Bros'
    };

  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('lanza un error si name es null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      }).timeout(5000);
      it('crea el videojuego con un nombre válido', () => {
        Videogame.create({ name: game.name });
      });
    });

    describe('id', () => {
      it('lanza un error si id es null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('crea el videojuego con un id válido', () => {
        Videogame.create({ id: game.id });
      });
    });
  
    describe('description', () => {
      it('lanza un error si description es null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
      it('crea el videojuego con una description válido', () => {
        Videogame.create({ description: game.description });
      });
    });
  
    describe('platforms', () => {
      it('lanza un error si platforms es null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid platforms')))
          .catch(() => done());
      });
      it('crea el videojuego con un platform válido', () => {
        Videogame.create({ platforms: game.platforms });
      });
    });

  });


});

describe('Genre model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    let game = {
      name: 'Super Mario Bros',
      id: 1,
      platforms: ['Nintendo DSi', 'Wii'],
      description: 'Nuevo Super Mario Bros'
    };

  describe('Validators', () => {
    beforeEach(() => Genre.sync({ force: true }));
    describe('name', () => {
      it('crea el genero con un nombre válido', () => {
        Genre.create({ name: 'Action' });
      });
    });

    describe('id', () => {
      it('crea el videojuego con un id válido', () => {
        Genre.create({ id: '2' });
      });
    });

  });


});
