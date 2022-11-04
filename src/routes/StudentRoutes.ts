import { Router } from 'express';
import { check } from 'express-validator';

class StudentRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/' );
        this.router.get( '/{id}' );
        this.router.get( '/kardex/{id}' );
    }
}

const studentRoutes = new StudentRoutes();
export default studentRoutes.router;
