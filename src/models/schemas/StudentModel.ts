import { DataTypes } from 'sequelize';
import DBConfig from '../../config/DBConfig';
import { StudentDocumentsInstance } from './interfaces/Schemas';

const StudentModel = DBConfig.define<StudentDocumentsInstance>( 'uni_alumnos', {
    matricula: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ape_pat: {
        type: DataTypes.STRING
    },
    ape_mat: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    curp: {
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.INTEGER
    },
    est_civil: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    municipio: {
        type: DataTypes.STRING
    },
    colonia: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    fec_nacimiento: {
        type: DataTypes.STRING
    },
    cve_dependencia: {
        type: DataTypes.STRING
    },
    cve_carrera: {
        type: DataTypes.INTEGER
    },
    id_role: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    }
});

export default StudentModel;
