import DBConfig from '../../config/DBConfig';
import { ProfessorDocumentsInstance } from './interfaces/Schemas';
import { DataTypes } from 'sequelize';
import RoleModel from './RoleModel';

const ProfesorModel = DBConfig.define<ProfessorDocumentsInstance>( 'uni_profesores', {
    cve_profesor: {
        type: DataTypes.INTEGER,
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
    email: {
        type: DataTypes.STRING
    },
    teléfono: {
        type: DataTypes.STRING
    },
    cve_dependencia: {
        type: DataTypes.STRING
    },
    id_role: {
        type: DataTypes.INTEGER,
        references: {
            model: RoleModel,
            key: 'id_role'
        }
    },
    password: {
        type: DataTypes.STRING
    }
});

export default ProfesorModel;
