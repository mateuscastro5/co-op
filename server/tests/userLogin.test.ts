import request from 'supertest';
import app from '../src/index';
import { it, expect, describe, beforeAll } from '@jest/globals';

describe('Testing user login', () => {

    beforeAll(async () => {
        const user = {
            email: 'mateus@gmail.com',
            password: 'pass123',
            name: 'mateus'
        };
        const response = await request(app).post('/users/register').send(user);
        if (response.status !== 201) {
            throw new Error('User registration failed');
        }
    });

    it('should login a user', async () => {
        const user = {
            email: 'mateus@gmail.com',
            password: 'pass123'
        };

        const response = await request(app).post('/users/login').send(user);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe('mateus');
        
    }, 10000); 
});
   