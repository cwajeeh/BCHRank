const request = require('supertest');
const app = require('../app');

describe('Admin API', () => {
  it('should delete an entry', async () => {
    const res = await request(app)
      .delete('/api/admin/delete/entryId')
      .send({ password: 'adminPassword' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Entry deleted');
  });
});
