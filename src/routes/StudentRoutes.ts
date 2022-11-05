import { Router } from 'express';
import Student from '../controller/Student';
import ValidateInput from '../middlewares/ValidateInput';
import { check } from 'express-validator';

class StudentRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post( '/', [
            ValidateInput.validateJWTStudent,
            check( 'matricula', 'El matricula es obligatorio' ).not().isEmpty(),
            check( 'ape_pat', 'El ape_pat es obligatorio' ).not().isEmpty(),
            check( 'ape_mat', 'El ape_mat es obligatorio' ).not().isEmpty(),
            check( 'nombre', 'El nombre es obligatorio' ).not().isEmpty(),
            check( 'curp', 'El curp es obligatorio' ).not().isEmpty(),
            check( 'genero', 'El genero es obligatorio' ).not().isEmpty(),
            check( 'est_civil', 'El est_civil es obligatorio' ).not().isEmpty(),
            check( 'estado', 'El estado es obligatorio' ).not().isEmpty(),
            check( 'municipio', 'El municipio es obligatorio' ).not().isEmpty(),
            check( 'colonia', 'El colonia es obligatorio' ).not().isEmpty(),
            check( 'direccion', 'El direccion es obligatorio' ).not().isEmpty(),
            check( 'telefono', 'El telefono es obligatorio' ).not().isEmpty(),
            check( 'celular', 'El celular es obligatorio' ).not().isEmpty(),
            check( 'email', 'El email es obligatorio' ).not().isEmpty(),
            check( 'fec_nacimiento', 'El fec_nacimiento es obligatorio' ).not().isEmpty(),
            check( 'password', 'El password es obligatorio' ).not().isEmpty(),
            check( 'cve_dependencia', 'El cve_dependencia es obligatorio' ).not().isEmpty(),
            check( 'cve_carrera', 'El cve_carrera es obligatorio' ).not().isEmpty(),
            ValidateInput.validateFields,
            Student.save
        ]);
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
