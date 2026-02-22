import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const {
  DB_DIALECT = 'sqlite',
  DB_STORAGE = './data.sqlite',
  DB_HOST = 'localhost',
  DB_PORT,
  DB_NAME = 'agri_market',
  DB_USER = 'agri_user',
  DB_PASS = 'password'
} = process.env;

const options = {
  dialect: DB_DIALECT,
  logging: false
};

if (DB_DIALECT === 'sqlite') {
  options.storage = DB_STORAGE;
} else {
  options.host = DB_HOST;
  if (DB_PORT) options.port = DB_PORT;
}

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, options);
