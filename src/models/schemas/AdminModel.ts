import { Model, DataTypes } from 'sequelize';
import DBConfig from '../../config/DBConfig';

interface AdminDocumentsInstance extends Model {
    id_admin: number;
    nombre: string;
    ape_pat: string;
    ape_mat: string;
    email: string;
    password: string;
    id_role: number;
}

const AdminModel = DBConfig.define<AdminDocumentsInstance>( 'uni_admins', {
    id_admin: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    ape_pat: {
        type: DataTypes.STRING
    },
    ape_mat: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    id_role: {
        type: DataTypes.NUMBER
    }
});

export default AdminModel;
