import { Router } from 'express';
import { check } from 'express-validator';

class AuthRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post( '/login' );
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
