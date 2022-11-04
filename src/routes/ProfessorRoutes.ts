import { Router } from 'express';
import { check } from 'express-validator';
import Professor from '../controller/Professor';
import ValidateInput from '../middlewares/ValidateInput';

class ProfessorRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/:id', [
            ValidateInput.validateJWTProfessor,
            Professor.getById
        ]);
        this.router.get( '/', [
            ValidateInput.validateJWTProfessor,
            Professor.getAll
        ]);
    }
}

const professorRoutes = new ProfessorRoutes();
export default professorRoutes.router;
