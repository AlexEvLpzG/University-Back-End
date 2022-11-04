import { DataTypes, Model } from 'sequelize';
import DBConfig from '../../../config/DBConfig';
import { ProfessorDocumentsInstance } from '../interfaces/Schemas';


const ViewProfessor = DBConfig.define<ProfessorDocumentsInstance>( 'profesores_view', {
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
