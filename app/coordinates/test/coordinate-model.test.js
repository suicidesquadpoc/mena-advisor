/* eslint-disable no-undef */
const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');
const db = require('../../../test/lib/database-helper');

afterEach(async () => {
  await db.clear('coordinates');
});

describe('GET /coordinates', () => {
  it('it should return an empty body []', async () => {
    const response = [];
    await supertest(app)
      .get('/coordinates')
      .expect(200)
      .expect(response);
  });

  it('it should return coordinates {}', async () => {
    const coordinate = {
      latitude: '0.5',
      longitude: '0.2'
    };

    await db.save('coordinates', coordinate);
    const res = await supertest(app)
      .get('/coordinates')
      .expect(200);
    expect(res.body).to.be.an.instanceof(Array);
    expect(res.body).to.have.lengthOf.above(0);
    expect(res.body[0]).to.have.property('coor_id');
    expect(res.body[0]).to.have.property('latitude');
    expect(res.body[0]).to.have.property('longitude');
  });
});
