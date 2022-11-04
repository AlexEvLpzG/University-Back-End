import { Request, Response } from 'express';
import ViewProfessor from '../models/schemas/view/viewProfessor';

class Professor {
    public static async getAll( req: Request, res: Response ): Promise<Response> {
        try {
            const professorList = await ViewProfessor.findAll();
            return res.status( 201 ).json({ ok: true, professorList });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }

    public static async getById( req: Request, res: Response ): Promise<Response> {
        const { id } = req.params;

        try {
            const professor = await ViewProfessor.findByPk( id );
            if( !professor ) {
                return res.status(404).json({ msg: `Professor with id ${ id } not found` });
            }

            return res.status( 201 ).json({ ok: true, professor });
        } catch (error) {
            return  res.status(500).json({ ok: false, message: 'There was an error searching for the Professors' });
        }
    }
}

export default Professor;
