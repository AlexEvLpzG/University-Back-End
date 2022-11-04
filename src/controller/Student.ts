import { Request, Response } from "express";
import ViewStudent from '../models/schemas/view/ViewStudent';
import ViewKardex from '../models/schemas/view/ViewKardex';
import StudentModel from '../models/schemas/StudentModel';
import RoleModel from '../models/schemas/RoleModel';
import DependencyModel from "../models/schemas/DependencyModel";
import CareerModel from '../models/schemas/CareerModel';

class Student {
    public static async getAll( req: any, res: Response ): Promise<Response> {
        // Todo: check if the role exists
        const existRole = await RoleModel.findByPk( req.role );
        if( !existRole ) {
            return res.status( 404 ).json({ ok: false, message: `El Role '${ existRole }' No existe en la BD` });
        }

        if( !existRole.description.includes( 'ROLE_ALUMNO' ) && !existRole.description.includes( 'ROLE_ADMIN' ) ) {
            return res.status( 401 ).json({ ok: false, message: `El Role '${ existRole.description }' No tiene privilegios para acceder a esta Ruta` });
        }

        try {
            const studentList = await ViewStudent.findAll();
            return res.status( 201 ).json({ ok: true, studentList });
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

        if( !existRole.description.includes( 'ROLE_ALUMNO' ) && !existRole.description.includes( 'ROLE_ADMIN' ) ) {
            return res.status( 401 ).json({ ok: false, message: `El Role '${ existRole.description }' No tiene privilegios para acceder a esta Ruta` });
        }

        try {
            const studentFound = await StudentModel.findByPk( id );
            if( !studentFound ) {
                return res.status(404).json({ msg: `student with id ${ id } not found` });
            }

            if( !studentFound ) {
                return res.status(400).json({
                    ok: false,
                    message: 'Email / Password incorrect - Email does not exist'
                });
            }

            const role = await RoleModel.findByPk( studentFound.id_role );
            const dependency = await DependencyModel.findOne({ where: { cve_dependencia: studentFound.cve_dependencia } });
            const career = await CareerModel.findOne({ where: { cve_carrera: studentFound.cve_carrera } });
            const StudentData: any = {
                matricula: studentFound.matricula,
                ape_pat:studentFound.ape_pat,
                ape_mat:studentFound.ape_mat,
                nombre:studentFound.nombres,
                email:studentFound.email,
                teléfono:studentFound.telefono,
                dependencia: {
                    id_dependencia: dependency?.id_dependencia,
                    cve_dependencia: dependency?.cve_dependencia,
                    nombre_dependencia: dependency?.nombre_dependencia,
                    direccion: dependency?.direccion
                },
                carrera: {
                    id_carrer: career?.cve_carrera,
                    nombre_carrera: career?.nombre_carrera
                },
                role: {
                    id_role: role?.id_role,
                    description: role?.description
                }
            };

            return res.status( 201 ).json({ ok: true, StudentData });
        } catch (error) {
            return  res.status(500).json({ ok: false, message: 'There was an error searching for the students' });
        }
    }

    public static async getAllKardex( req: any, res: Response ): Promise<Response> {
        // Todo: check if the role exists
        const existRole = await RoleModel.findByPk( req.role );
        if( !existRole ) {
            return res.status( 404 ).json({ ok: false, message: `El Role '${ existRole }' No existe en la BD` });
        }

        if( !existRole.description.includes( 'ROLE_ALUMNO' ) && !existRole.description.includes( 'ROLE_ADMIN' ) ) {
            return res.status( 401 ).json({ ok: false, message: `El Role '${ existRole.description }' No tiene privilegios para acceder a esta Ruta` });
        }

        try {
            const kardexList = await ViewKardex.findAll();
            return res.status( 201 ).json({ ok: true, kardexList });
        } catch ( error ) {
            return  res.status(500).json({ ok: false, message: error });
        }
    }

    public static async getKardexById( req: any, res: Response ): Promise<Response> {
        const { id } = req.params;
        // Todo: check if the role exists
        const existRole = await RoleModel.findByPk( req.role );
        if( !existRole ) {
            return res.status( 404 ).json({ ok: false, message: `El Role '${ existRole }' No existe en la BD` });
        }

        if( !existRole.description.includes( 'ROLE_ALUMNO' ) && !existRole.description.includes( 'ROLE_ADMIN' ) ) {
            return res.status( 401 ).json({ ok: false, message: `El Role '${ existRole.description }' No tiene privilegios para acceder a esta Ruta` });
        }

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
