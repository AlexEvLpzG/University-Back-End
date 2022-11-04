import { Model, DataTypes } from 'sequelize';
import DBConfig from '../../config/DBConfig';

interface RoleDocumentsInstance extends Model {
    id_role: number;
    description: string;
}

const RoleModel = DBConfig.define<RoleDocumentsInstance>( 'uni_roles', {
    id_role: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING
    }
});

export default RoleModel;
