/* eslint-disable import/no-extraneous-dependencies */
const  chai = require('chai');
const chaiHttp = require('chai-http');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn, Genre } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

chai.should();
chai.use(chaiHttp);
const url= 'http://localhost:3001';

const agent = session(app);
let game = {
  name: 'Super Mario Bros',
  id: uuidv4(),
  platforms: ['Nintendo DSi', 'Wii'],
  description: 'Nuevo Super Mario Bros'
};


// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Videogame.sync({ force: true })
//     .then(() => Videogame.create(game)))

//   });

  describe('Ruta videojuegos', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
      beforeEach(() => Videogame.sync({ force: true })
        .then(() => Videogame.create(game)))
    
    describe('GET ', () => {
      it('/api/videogames/all deberia traer todos los juegos', (done) => {
        chai.request(url)
          .get('/api/videogames/all')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.a('array');
            response.body.length.should.equal(40);
            done();
          })
      }).timeout(5000)

      it('/api/videogames/myGames deberia traer el videojuego creado', (done) => {
        chai.request(url)
          .get('/api/videogames/myGames')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.a('array');
            response.body.length.should.equal(1);
            done();
          })
      }).timeout(5000)

      it('/api/videogames/:id deberia traer un juego por ID', (done) => {
        chai.request(url)
          .get('/api/videogames/4200')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('id');
            response.body.should.have.property('id').equal(4200);
            response.body.should.have.property('name');
            done();
          })
      }).timeout(5000)

      it('/api/videogames/?name="..." deberia traer un juego por nombre', (done) => {
        chai.request(url)
          .get('/api/videogames?name="Portal 2" ')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.a('array');
            response.body.length.should.equal(40);
            done();
          })
      }).timeout(5000)
    
    })

    describe('POST', () => {
      it('/api/videogames/ deberia crear un videojuego', (done) => {
        let game = {
          name: 'Call of Duty',
          id: uuidv4(),
          platforms: ['PlayStation 5', 'Xbox One'],
          description: 'Modern Warfare',
          genre: ['Action', 'Indie'],
          released: '2021-06-02',
          rating: 5
        };

        chai.request(url)
          .post('/api/videogames/')
          .send(game)
          .end((err, response) => {
            response.should.have.status(200);
            console.log(response.text);
            response.text.should.a('string');
            response.text.should.a('string').eq('Game created');
            done();
          })
      })
    })
  })

  describe('Ruta generos', () => {
    describe('GET ', () => {
      it('/api/genres/all deberia traer todos los juegos', (done) => {
        chai.request(url)
          .get('/api/genres/all')
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.a('array');
            response.body.length.should.equal(16 || 19);
            done();
          })
      })
    })
  });
