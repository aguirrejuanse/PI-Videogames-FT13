/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
let game = {
  name: 'Super Mario Bros',
  id: uuidv4(),
  platforms: ['Nintendo DSi', 'Wii'],
  description: 'Nuevo Super Mario Bros'
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(game)))
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/api/videogames').expect(200)
    );
  });
});
