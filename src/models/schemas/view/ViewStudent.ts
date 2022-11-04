import { Model, DataTypes } from 'sequelize';
import DBConfig from '../../../config/DBConfig';

interface ViewDocumentsIntance extends Model {
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
    nombre_dependencia: string;
    nombre_carrera: string;
    ROLE: string;
}

const ViewStudent = DBConfig.define<ViewDocumentsIntance>( 'estudiantes_views', {
    ape_pat: {
        type: DataTypes.STRING
    },
    ape_mat: {
        type: DataTypes.STRING
    },
    nombres: {
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
    nombre_dependencia: {
        type: DataTypes.STRING
    },
    nombre_carrera: {
        type: DataTypes.STRING
    },
    ROLE: {
        type: DataTypes.STRING
    },
});

export default ViewStudent;
