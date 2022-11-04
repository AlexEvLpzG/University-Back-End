import { Sequelize } from 'sequelize';

const DBConfig = new Sequelize( 'universidad', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default DBConfig;
