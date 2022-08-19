const supertest = require('supertest');
const createServer = require('../../src/createServer');

let server
let request

beforeAll(async () => {
    server = await createServer();
    request = supertest(server.app.callback())
});

afterAll(async () => {
    await server.stop()
});

test('GET /api/users/:id (geen toegang)', async () => {
    const res = await request.get('/api/users/099a857f-e9e9-4503-b93f-5898a1d39907');
    expect(res.status).toBe(500);
});

test('GET /api/users/:id', async () => {
    const login = await request.post('/api/login').send({username : 'Timon', password : 'password'});
    const res = await request.get('/api/users/099a857f-e9e9-4503-b93f-5898a1d39907')
        .set('Authorization', `Bearer ${login.body.data.token}`);
    expect(res.status).toBe(200);
    expect(res.body.data.username).toBe('Timon')
});