import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  database: 'triqui',
  username: 'postgres',
  password: '1234'
});

export default sequelize;