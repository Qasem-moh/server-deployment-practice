'use strict';

const server = require('../server');

const supertest = require('supertest');
const request = supertest(server.app);

describe('Server', () => {
    it('handles invalid request', async () => {
        const response = await request.get('/asd')
        expect(response.status).toEqual(404)
    });
    it('handles my internail server errors', async () => {
        const response = await request.post('/bad')
        expect(response.status).toEqual(500)
    });
    it('get data from /data', async () => {
        const response = await request.get('/data')
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')

    });

    it('/ route works', async () => {
        const response = await request.get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Hello from home Route!')
    });
})