import express from 'express';
import morgan from 'morgan';
import playersRoutes from '../src/routes/payers.routes.js';

const app = express();


//routes
app.use(playersRoutes)


export default app;