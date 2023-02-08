import { Sequelize } from 'sequelize';
import { configApp } from '../config/app.config';

const {DATABASE, PASSWORD, PORT, USER, HOST} = configApp.db
const db = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  port : PORT,
  logging : false
});

export default db;