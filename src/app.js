import express from 'express';
import morgan from 'morgan';
//import cookieParser from 'cookie-parser';
import cors from 'cors';

import arduinoRoutes from './routes/arduino.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
//app.use(cookieParser());

app.use('/api', arduinoRoutes);

export default app;
