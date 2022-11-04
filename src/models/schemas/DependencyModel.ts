import { Model, DataTypes } from 'sequelize';
import DBConfig from '../../config/DBConfig';

interface DependencyDocumentsInstance extends Model {
    id_dependencia: Number;
    cve_dependencia: string;
    nombre_dependencia: string;
    direccion: string;
}

const DependencyModel = DBConfig.define<DependencyDocumentsInstance>( 'uni_dependencias',{
    id_dependencia: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cve_dependencia: {
        type: DataTypes.STRING
    },
    nombre_dependencia: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    }
});

export default DependencyModel;
