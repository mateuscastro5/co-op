import request from 'supertest';
import app from '../src/index';

describe('Testing games API', () => {
  it('should create a new game', async () => {
    
    const newGame = {
      title: 'The Legend of Zelda: Breath of the Wild',
      developer: 'Mateus',
      description: 'The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo.',
      status: 'active'
    };

    const response = await request(app).post('/games').send(newGame);
    
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newGame.title);

  })
})
