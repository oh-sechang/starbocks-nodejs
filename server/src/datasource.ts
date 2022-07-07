import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Product } from './model/Product'
import { ProductBasketItem } from './model/ProudctBasket'

const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'dhtpckd1',
  database: 'starbocks',
  entities: [Product, ProductBasketItem],
  synchronize: true,
  logging: true,
})

export default AppDataSource
