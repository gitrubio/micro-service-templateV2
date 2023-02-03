import { Sequelize } from 'sequelize';

const db = new Sequelize('andromeda', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging : false
});

export default db;