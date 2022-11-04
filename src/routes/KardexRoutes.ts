import { Router } from 'express';
import { check } from 'express-validator';
import Student from '../controller/Student';

class KardexRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get( '/', Student.getAllKardex );
        this.router.get( '/:id', Student.getKardexById );
    }
}

const kardexRoutes = new KardexRoutes();
export default kardexRoutes.router;
