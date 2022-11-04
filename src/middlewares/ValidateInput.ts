import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

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
}

export default ValidateInput;
