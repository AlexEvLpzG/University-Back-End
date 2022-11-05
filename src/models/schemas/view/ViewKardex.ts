import { Model, DataTypes } from 'sequelize';
import DBConfig from '../../../config/DBConfig';

interface ViewDocumentsIntance extends Model {
        materia: string;
        nombre_carrera: string;
        ape_pat: string;
        ape_mat: string;
        nombre: string;
        matricula: string;
        semestre: string;
        calificación: Number;
        createdAt: string;
        updatedAt: string;
}

const ViewKardex = DBConfig.define<ViewDocumentsIntance>( 'kardex_views', {
        materia: {
            type: DataTypes.STRING
        },
        nombre_carrera: {
            type: DataTypes.STRING
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
        matricula: {
            type: DataTypes.STRING
        },
        semestre: {
            type: DataTypes.STRING
        },
        calificación: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.STRING
        },
        updatedAt: {
            type: DataTypes.STRING
        },
});

export default ViewKardex;
