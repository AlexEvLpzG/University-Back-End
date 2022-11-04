import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

import DBConfig from '../config/DBConfig';
import { AuthRoutes, ProfessorRoutes, StudentRoutes, KardexRoutes } from '../routes/Index';

class Server {
    private app : Application;
    private port : string;
    private apiPaths = {
        auth: '/api/auth',
        professor: '/api/professor',
        student: '/api/student',
        kardex: '/api/kardex',
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '4000';

        // * Metodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await DBConfig.authenticate();
            console.log( "Database Online" );
        } catch( error ) {
            throw new Error( "Error en la Conexion: " + error );
        }
    }

    middlewares() {
        // ? CORS
        this.app.use( cors() );

        // ? Lectua del body
        this.app.use( express.json() );

        // ? Carpeta publica
        this.app.use( express.static( '../public' ) );
        // * Setting
        this.app.use( morgan( 'dev' ) );
        this.app.use( helmet() );
        this.app.use( compression() );
    }

    routes() {
        this.app.use( this.apiPaths.auth, AuthRoutes );
        this.app.use( this.apiPaths.professor, ProfessorRoutes );
        this.app.use( this.apiPaths.student, StudentRoutes );
        this.app.use( this.apiPaths.kardex, KardexRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server Corriendo en el puerto: ' + this.port );
        });
    }
}

export default Server;
