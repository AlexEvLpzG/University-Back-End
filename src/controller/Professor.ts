import { Response } from 'express';
import ViewProfessor from '../models/schemas/view/ViewProfessor';
import RoleModel from '../models/schemas/RoleModel';
import DependencyModel from '../models/schemas/DependencyModel';
import ProfesorModel from '../models/schemas/ProfesorModel';

class Professor {
    public static async getAll( req: any, res: Response ): Promise<Response> {
        // Todo: check if the role exists
        const existRole = await RoleModel.findByPk( req.role );
        if( !existRole ) {
            return res.status( 404 ).json({ ok: false, message: `El Role '${ existRole }' No existe en la BD` });
        }

        if( !existRole.description.includes( 'ROLE_PROFESOR' ) && !existRole.description.includes( 'ROLE_ADMIN' ) ) {
            return res.status( 401 ).json({ ok: false, message: `El Role '${ existRole.description }' No tiene privilegios para acceder a esta Ruta` });
        }

        try {
            const professorList = await ViewProfessor.findAll();
            return res.status( 201 ).json({ ok: true, professorList });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }

    public static async getById( req: any, res: Response ): Promise<Response> {
        const { id } = req.params;
        // Todo: check if the role exists
        const existRole = await RoleModel.findByPk( req.role );
        if( !existRole ) {
            return res.status( 404 ).json({ ok: false, message: `El Role '${ existRole }' No existe en la BD` });
        }

        if( !existRole.description.includes( 'ROLE_PROFESOR' ) && !existRole.description.includes( 'ROLE_ADMIN' ) ) {
            return res.status( 401 ).json({ ok: false, message: `El Role '${ existRole.description }' No tiene privilegios para acceder a esta Ruta` });
        }

        try {
            const professorFound = await ProfesorModel.findByPk( id );
            if( !professorFound ) {
                return res.status(404).json({ msg: `Professor with id ${ id } not found` });
            }

            if( !professorFound ) {
                return res.status(400).json({
                    ok: false,
                    message: 'Email / Password incorrect - Email does not exist'
                });
            }

            const role = await RoleModel.findByPk( professorFound.id_role );
            const dependency = await DependencyModel.findOne({ where: { cve_dependencia: professorFound.cve_dependencia } });
            const ProfessorData: any = {
                cve_profesor: professorFound.cve_profesor,
                ape_pat:professorFound.ape_pat,
                ape_mat:professorFound.ape_mat,
                nombre:professorFound.nombre,
                email:professorFound.email,
                teléfono:professorFound.teléfono,
                cve_dependencia: {
                    id_dependencia: dependency?.id_dependencia,
                    cve_dependencia: dependency?.cve_dependencia,
                    nombre_dependencia: dependency?.nombre_dependencia,
                    direccion: dependency?.direccion
                },
                role: {
                    id_role: role?.id_role,
                    description: role?.description
                }
            };

            return res.status( 201 ).json({ ok: true, ProfessorData });
        } catch (error) {
            return  res.status(500).json({ ok: false, message: 'There was an error searching for the Professors' });
        }
    }
}

export default Professor;
