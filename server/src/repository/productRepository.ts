import AppDataSource from '../datasource'
import { Product } from '../model/Product'

const productRepository = AppDataSource.getRepository(Product).extend({
  findAll(limit: number) {
    return this.createQueryBuilder('product').limit(limit).getMany()
  },
})

export default productRepository
