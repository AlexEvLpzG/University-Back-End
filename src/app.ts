import dotenv from 'dotenv';
import Server from './models/Server';

// * Configuración de variables de entorno
dotenv.config();

const server = new Server();

server.listen();
