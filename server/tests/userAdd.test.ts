import request from 'supertest';
import app from '../src/index';

describe('Testing users API', () => {
  it('should create a new user', async () => {
    
    const newUser = {
      name: 'Mateus',
      email: 'mateus@gmail.com',
      password: 'pass123',
      id: '1'
    };

    const response = await request(app).post('/users/register').send(newUser);

    expect (response.status).toBe(201);
    expect (response.body.name).toBe(newUser.name);

  })
})