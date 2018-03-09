import request from 'supertest';
import app from '../../app';

const url = '/api/article';
const param = '1';
const urlParam = `${url}/${param}`;

describe('API', () => {
  describe(`GET ${url}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app.callback()).get(url);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('getAll');
    });
  });
  describe(`POST ${url}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app.callback()).post(url);
      expect(res.status).toEqual(201);
      expect(res.body.message).toEqual('createOne');
    });
  });
  describe(`GET ${urlParam}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app.callback()).get(urlParam);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('getOne');
      expect(res.body).toHaveProperty('data');
      expect(res.body.data).toEqual(param);
    });
  });
  describe(`PATCH ${urlParam}`, () => {
    test('should respond status and data', async () => {
      const data = {
        title: 'Updated article',
      };
      const res = await request(app.callback())
        .patch(urlParam)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(data);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('updateOne');
      expect(res.body.data).toHaveProperty('title');
      expect(res.body.data).toEqual(data);
    });
  });
  describe(`DELETE ${urlParam}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app.callback()).del(urlParam);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('deleteOne');
    });
  });
});
