import { Request, Response } from 'express';
import StudentModel from '../models/schemas/StudentModel';
import ProfesorModel from '../models/schemas/ProfesorModel';
import bcryptjs from 'bcryptjs';
import Jwt from '../helpers/Jwt';
import RoleModel from '../models/schemas/RoleModel';

class Auth {
    public static async LoginProfessor( req: Request, res: Response ): Promise<Response> {
        const { email, password } = req.body;

        try {
            const professorFound = await ProfesorModel.findOne({ where: { email } });

            if( !professorFound ) {
                return res.status(400).json({
                    ok: false,
                    message: 'Email / Password incorrect - Email does not exist'
                });
            }

            const validPassword = bcryptjs.compareSync( password, professorFound.password );

            if( !validPassword ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Email / Password incorrect - Email does not exist - Password incorrecto'
                });
            }
            const role = await RoleModel.findByPk( professorFound.id_role );
            const Token = await Jwt.generateJWT( professorFound.cve_profesor, professorFound.nombre, role?.description  );
            const ProfessorData: any = {
                cve_profesor: professorFound.cve_profesor,
                ape_pat:professorFound.ape_pat,
                ape_mat:professorFound.ape_mat,
                nombre:professorFound.nombre,
                email:professorFound.email,
                teléfono:professorFound.teléfono,
                cve_dependencia: professorFound.cve_dependencia,
                role: {
                    id_role: role?.id_role,
                    description: role?.description
                }
            };

            return res.status( 201 ).json({ ok: true, ProfessorData, Token });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }

    public static async LoginStudent( req: Request, res: Response ): Promise<Response> {
        const { email, password } = req.body;

        try {
            const studentFound = await StudentModel.findOne({ where: { email } });

            if( !studentFound ) {
                return res.status(400).json({
                    ok: false,
                    message: 'Email / Password incorrect - Email does not exist'
                });
            }

            const validPassword = bcryptjs.compareSync( password, studentFound.password );

            if( !validPassword ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Email / Password incorrect - Email does not exist - Password incorrecto'
                });
            }
            const role = await RoleModel.findByPk( studentFound.id_role );
            const Token = await Jwt.generateJWT( studentFound.matricula, studentFound.nombres, role?.description  );
            const StudentData: any = {
                matricula: studentFound.matricula,
                ape_pat:studentFound.ape_pat,
                ape_mat:studentFound.ape_mat,
                nombre:studentFound.nombres,
                email:studentFound.email,
                teléfono:studentFound.telefono,
                cve_dependencia: studentFound.cve_dependencia,
                role: {
                    id_role: role?.id_role,
                    description: role?.description
                }
            };

            return res.status( 201 ).json({ ok: true, StudentData, Token });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }
}

export default Auth;
