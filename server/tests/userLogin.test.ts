import request from 'supertest';
import app from '../src/index';
import exp from 'constants';

describe ('Testing user login', () => {
    it('should login a user', async () => {
        const user = {
            name: 'mateus',
            email: 'mateus@gmail.com',
            password: 'pass123',
            id: '1'
        }

        const response = await request(app).post('/users/login').send(user);

        expect.response.status.toBe(200);
        expect(response.body.name).toBe(user.name);
        
    })
})