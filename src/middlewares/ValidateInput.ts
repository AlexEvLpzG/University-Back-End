import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import ProfesorModel from '../models/schemas/ProfesorModel';
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
            return res.status( 401 ).json({ ok: false, message: 'There is no token in the request' });
        }

        try {
            const { id }: any = jwt.verify( token, process.env.SECRET_JWT_SEED || 'secret' );
            const profesorData = await ProfesorModel.findByPk( id );

            if( !profesorData ) {
                return res.status( 401 ).json({
                    ok: false,
                    message: 'Token is not valid - The Professor does not exist in the database'
                });
            }

            req.profesorData = profesorData;
            req.role = profesorData.id_role;
            req.id  = id;
            nex();
        } catch (error) {
            return res.status( 401 ).json({ ok: false, message: 'The token is not valid' });
        }
    }
}

export default ValidateInput;
