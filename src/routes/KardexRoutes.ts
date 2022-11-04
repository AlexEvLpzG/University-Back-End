import { Router } from 'express';
import Student from '../controller/Student';
import ValidateInput from '../middlewares/ValidateInput';

class KardexRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/', [
            ValidateInput.validateJWTStudent,
            Student.getAllKardex
        ]);
        this.router.get( '/:id', [
            ValidateInput.validateJWTStudent,
            Student.getKardexById
        ]);
    }
}

const kardexRoutes = new KardexRoutes();
export default kardexRoutes.router;
