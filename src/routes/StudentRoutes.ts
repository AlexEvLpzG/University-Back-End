import { Router } from 'express';
import { check } from 'express-validator';
import Student from '../controller/Student';

class StudentRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/', Student.getAll );
        this.router.get( '/:id', Student.getById );
    }
}

const studentRoutes = new StudentRoutes();
export default studentRoutes.router;
