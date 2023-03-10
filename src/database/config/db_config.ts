import { Dialect } from "sequelize";
import { SequelizeOptions } from 'sequelize-typescript';
import config from "../../utils/config";

class Config {
  static dialect: Dialect = 'postgres'
  static username = config.POSTGRES_USER
  static password = config.POSTGRES_PASS
  static models = [__dirname + '../model/final/*.model.*', __dirname + '../models/relations/*.model.*']
  static port = config.POSTGRES_PORT
  static modelMatch = (filename: string, member: string) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  }
}

/**
 * Конфиг DEV окружения для ДБ
 */
export const Dev_Config = {
  database: "tasktracker_dev",
  host: "localhost",
  dialect: Config.dialect,
  username: Config.username,
  password: Config.password,
  models: [__dirname + '/../model/final/*.model.*', __dirname + '/../models/relations/*.model.*'],
  port: parseInt(Config.port!),
  modelMatch: Config.modelMatch
} as SequelizeOptions

/**
 * Конфиг PROD окружения для ДБ
 */
export const PROD_Config = {
  database: config.POSTGRES_PROD_DB,
  host: config.POSTGRES_PROD_HOST,
  dialect: Config.dialect,
  username: Config.username,
  password: Config.password,
  models: [__dirname + '/../model/final/*.model.*', __dirname + '/../models/relations/*.model.*'],
  port: parseInt(Config.port!),
  modelMatch: Config.modelMatch
} as SequelizeOptions

/**
 * Конфиг TEST окружения для ДБ
 */
export const TEST_Config = {
  database: "tasktracker_test",
  host: "localhost",
  dialect: Config.dialect,
  username: Config.username,
  password: Config.password,
  models: [__dirname + '/../model/final/*.model.*', __dirname + '/../models/relations/*.model.*'],
  port: parseInt(Config.port!),
  modelMatch: Config.modelMatch
} as SequelizeOptions