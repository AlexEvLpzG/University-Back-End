import { Router } from 'express';
import Student from '../controller/Student';
import ValidateInput from '../middlewares/ValidateInput';

class StudentRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/', [
            ValidateInput.validateJWTStudent,
            Student.getAll
        ]);
        this.router.get( '/:id', [
            ValidateInput.validateJWTStudent,
            Student.getById
        ]);
    }
}

const studentRoutes = new StudentRoutes();
export default studentRoutes.router;
