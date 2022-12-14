import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import ProfesorModel from '../models/schemas/ProfesorModel';
import StudentModel from '../models/schemas/StudentModel';
import AdminModel from '../models/schemas/AdminModel';
const jwt = require( 'jsonwebtoken' );

class ValidateInput {
    /*
        * Validate if some error in the request, wearing express-validator
        * @method: validateFields
        * @params req: AnySchema - mistakes in the request
        * @params res: Response - return the response with the status and the message
        * @params next: NextFunction - call the next function
    */
    public static validateFields( req: Request, res: Response, next: NextFunction ): Response | void {
        const errors = validationResult( req );
        if( !errors.isEmpty() ) {
            return res.status(400).json({ ok: false, errors });
        }

        next();
    }

    /*
        * We validate @params req check user token
        * @method: validateJWT
        * @params req: Request | any - user and token information
        * @params res: Response - return the response with the status and the message
        * @params next: NextFunction - call the next function
    */
    public static async validateJWTProfessor( req: Request | any, res: Response, nex: NextFunction ): Promise<Response | void> {
        const token = req.header( 'Authorization' );

        if( !token ) {
            return res.status( 401 ).json({ ok: false, message: 'Necesitas un Token para acceder a esta Ruta' });
        }

        try {
            const { id }: any = jwt.verify( token, process.env.SECRET_JWT_SEED || 'secret' );
            const profesorData = await ProfesorModel.findByPk( id );
            const adminData = await AdminModel.findByPk( id );
            const userData = profesorData || adminData;

            if( !userData ) {
                return res.status( 401 ).json({
                    ok: false,
                    message: 'Token no es v??lido - El Profesor No existe En la DB'
                });
            }

            req.userData = userData;
            req.role = userData.id_role;
            req.id  = id;
            nex();
        } catch (error) {
            return res.status( 401 ).json({ ok: false, message: 'El token no es v??lido - Se Altero la Informaci??n del Token' });
        }
    }

    /*
        * We validate @params req check user token
        * @method: validateJWT
        * @params req: Request | any - user and token information
        * @params res: Response - return the response with the status and the message
        * @params next: NextFunction - call the next function
    */
    public static async validateJWTStudent( req: Request | any, res: Response, nex: NextFunction ): Promise<Response | void> {
        const token = req.header( 'Authorization' );

        if( !token ) {
            return res.status( 401 ).json({ ok: false, message: 'Necesitas un Token para acceder a esta Ruta' });
        }

        try {
            const { id }: any = jwt.verify( token, process.env.SECRET_JWT_SEED || 'secret' );
            const studentData = await StudentModel.findByPk( id );
            const adminData = await AdminModel.findByPk( id );
            const userData = studentData || adminData;

            if( !userData ) {
                return res.status( 401 ).json({
                    ok: false,
                    message: 'Token no es v??lido - El Alumno No existe En la DB'
                });
            }

            req.userData = userData;
            req.role = userData.id_role;
            req.id  = id;
            nex();
        } catch (error) {
            return res.status( 401 ).json({ ok: false, message: 'El token no es v??lido - Se Altero la Informaci??n del Token' });
        }
    }
}

export default ValidateInput;
