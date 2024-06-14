const request = require('supertest');
const app = require('../app');

describe('Search API', () => {
  it('should return results for a search query', async () => {
    const res = await request(app).get('/api/search?keywords=cash');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
