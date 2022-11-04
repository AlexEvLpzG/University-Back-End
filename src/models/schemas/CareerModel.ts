import { Model, DataTypes } from 'sequelize';
import DBConfig from '../../config/DBConfig';

interface CareerDocumentsInstance extends Model {
    cve_carrera: Number;
    nombre_carrera: string;
}

const CareerModel = DBConfig.define<CareerDocumentsInstance>( 'uni_carreras',{
    cve_carrera: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre_carrera: {
        type: DataTypes.STRING
    }
});

export default CareerModel;
