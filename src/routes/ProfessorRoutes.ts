import { Router } from 'express';
import { check } from 'express-validator';

class ProfessorRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/id' );
    }
}

const professorRoutes = new ProfessorRoutes();
export default professorRoutes.router;
