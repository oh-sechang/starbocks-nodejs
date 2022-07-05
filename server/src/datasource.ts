import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Coffee } from './model/Coffee'

const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'dhtpckd1',
  database: 'starbocks',
  entities: [Coffee],
  synchronize: true,
  logging: true,
})

export default AppDataSource
