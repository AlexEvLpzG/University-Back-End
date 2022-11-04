import { Request, Response } from "express";
import ViewStudent from '../models/schemas/view/ViewStudent';
import ViewKardex from '../models/schemas/view/ViewKardex';

class Student {
    public static async getAll( req: Request, res: Response ): Promise<Response> {
        try {
            const studentList = await ViewStudent.findAll();
            return res.status( 201 ).json({ ok: true, studentList });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }

    public static async getById( req: Request, res: Response ): Promise<Response> {
        const { id } = req.params;

        try {
            const student = await ViewStudent.findByPk( id );
            if( !student ) {
                return res.status(404).json({ msg: `student with id ${ id } not found` });
            }

            return res.status( 201 ).json({ ok: true, student });
        } catch (error) {
            return  res.status(500).json({ ok: false, message: 'There was an error searching for the students' });
        }
    }

    public static async getAllKardex( req: Request, res: Response ): Promise<Response> {
        try {
            const kardexList = await ViewKardex.findAll();
            return res.status( 201 ).json({ ok: true, kardexList });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }

    public static async getKardexById( req: Request, res: Response ): Promise<Response> {
        const { id } = req.params;

        try {
            const kardex = await ViewKardex.findAll({ where: { id: id } });
            if( !kardex ) {
                return res.status(404).json({ msg: `kardex with id ${ id } not found` });
            }

            return res.status( 201 ).json({ ok: true, kardex });
        } catch (error) {
            return  res.status(500).json({ ok: false, message: 'There was an error searching for the kardex' });
        }
    }
}

export default Student;
