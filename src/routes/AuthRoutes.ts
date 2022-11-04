import { Router } from 'express';
import { check } from 'express-validator';
import Auth from '../controller/Auth';
import ValidateInput from '../middlewares/ValidateInput';

class AuthRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.post( '/login/professor',
            [
                check( 'email', 'El Email es obligatorio' ).not().isEmpty(),
                check( 'email', 'El email no es válido' ).isEmail(),
                check( 'password', 'La contraseña es obligatoria' ).not().isEmpty(),
                check( 'password', 'La contraseña debe tener al menos 6 caracteres y un máximo 16 caracteres' ).isLength({ min: 6, max: 16 }),
                ValidateInput.validateFields
            ],
            Auth.LoginProfessor
        );

        this.router.post( '/login/student',
            [
                check( 'email', 'El Email es obligatorio' ).not().isEmpty(),
                check( 'email', 'El email no es válido' ).isEmail(),
                check( 'password', 'La contraseña es obligatoria' ).not().isEmpty(),
                check( 'password', 'La contraseña debe tener al menos 6 caracteres y un máximo 16 caracteres' ).isLength({ min: 6, max: 16 }),
                ValidateInput.validateFields
            ],
            Auth.LoginStudent
        );

        this.router.post( '/login/admin',
            [
                check( 'email', 'El Email es obligatorio' ).not().isEmpty(),
                check( 'email', 'El email no es válido' ).isEmail(),
                check( 'password', 'La contraseña es obligatoria' ).not().isEmpty(),
                check( 'password', 'La contraseña debe tener al menos 6 caracteres y un máximo 16 caracteres' ).isLength({ min: 6, max: 16 }),
                ValidateInput.validateFields
            ],
            Auth.LoginAdmin
        );
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
