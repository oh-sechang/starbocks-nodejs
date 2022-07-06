import AppDataSource from '../datasource'
import { Product } from '../model/Product'

const itemRepository = AppDataSource.getRepository(Product).extend({
  findAll(limit: number) {
    return this.createQueryBuilder('product').limit(limit).getMany()
  },
})

export default itemRepository
