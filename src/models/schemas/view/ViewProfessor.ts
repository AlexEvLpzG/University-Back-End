import { DataTypes, Model } from 'sequelize';
import DBConfig from '../../../config/DBConfig';

interface ViewDocumentsIntance extends Model {
    ape_pat: string;
    ape_mat: string;
    nombre: string;
    email: string;
    teléfono: string;
    nombre_dependencia: string;
    ROLE: string;
}

const ViewProfessor = DBConfig.define<ViewDocumentsIntance>( 'profesores_view', {
    ape_pat: {
        type: DataTypes.STRING
    },
    ape_mat: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    teléfono: {
        type: DataTypes.STRING
    },
    nombre_dependencia: {
        type: DataTypes.STRING
    },
    ROLE: {
        type: DataTypes.STRING
    },
});

export default ViewProfessor;
