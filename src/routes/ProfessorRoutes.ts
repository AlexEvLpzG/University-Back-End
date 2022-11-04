import { Router } from 'express';
import { check } from 'express-validator';
import Professor from '../controller/Professor';

class ProfessorRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/:id', Professor.getById );
        this.router.get( '/', Professor.getAll );
    }
}

const professorRoutes = new ProfessorRoutes();
export default professorRoutes.router;
