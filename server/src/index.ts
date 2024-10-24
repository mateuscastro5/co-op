import express from 'express';
import gameRoutes from './routes/gameRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/games', gameRoutes);
app.use('/users', userRoutes);

export default app;
