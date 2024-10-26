import request from 'supertest';
import app from '../src/index';
import { expect, describe, it } from '@jest/globals';
import { beforeAll } from '@jest/globals';

describe('List games', () => {
    const newGame = {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Mateus',
        description: 'The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo.',
        status: 'active'
    }

    beforeAll(async () => {
        const response = await request(app).post('/games').send(newGame);

        if (response.status !== 201) {
            throw new Error('Game registration failed');
        }
    });
    it('should list all games contained in the database', async () => {
        const response = await request(app).get('/games');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({newGame})          
            ]))
    })
});