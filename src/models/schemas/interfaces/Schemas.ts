import { Model } from 'sequelize';

export interface StudentDocumentsInstance extends Model {
    matricula: string;
    ape_pat: string;
    ape_mat: string;
    nombres: string;
    curp: string;
    genero: number;
    est_civil: string;
    estado: string;
    municipio: string;
    colonia: string;
    direccion: string;
    telefono: string;
    celular: string;
    email: string;
    fec_nacimiento: string;
    password: string;
    id_role: number;
    cve_dependencia: string;
}

export interface ProfessorDocumentsInstance extends Model {
    cve_profesor: string;
    ape_pat: string;
    ape_mat: string;
    nombre: string;
    email: string;
    teléfono: string;
    password: string;
    id_role: number;
    cve_dependencia: string;
}
