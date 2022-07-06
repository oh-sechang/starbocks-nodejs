import AppDataSource from '../datasource'
import { Coffee } from '../model/Coffee'

const coffeeRepository = AppDataSource.getRepository(Coffee).extend({
  findAll(limit: number) {
    return this.createQueryBuilder('coffee').limit(limit).getMany()
  },
})

export default coffeeRepository
