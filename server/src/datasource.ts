import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Product } from './model/Product'
import { ProductBasketItem } from './model/ProductBasket'

const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'dhtpckd1',
  database: 'starbocks',
  entities: [Product, ProductBasketItem],
  //entities: [__dirname + '/server/src/model/*.ts'],
  synchronize: true,
  logging: false,
})

export default AppDataSource
