import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fruitsRoutes from './routes/fruits.Routes.js';
import { nodeConfig } from './config.js';

const app = express();
app.use(cors());
app.use(morgan('dev'));

// Rutas manejadas desde el archivo fruits.Routes.js
app.use(fruitsRoutes)


app.listen(nodeConfig.NODE_DOCKER_PORT, () => {
    console.log(`Server started on port ${nodeConfig.NODE_DOCKER_PORT}🚀`);
});
