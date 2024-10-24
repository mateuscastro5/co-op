import express from 'express';
import gameRoutes from './routes/gameRoutes';


const app = express();

app.use(express.json());
app.use('/games', gameRoutes);

export default app;
