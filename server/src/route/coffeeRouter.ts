import express, { Request, Response } from 'express'
import { Coffee } from '../model/Coffee'
import coffeeRepository from '../repository/coffeeRepository'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const coffees: Coffee[] = await coffeeRepository.findAll(10)

  res.json({
    success: true,
    message: '성공적으로 조회되었습니다.',
    coffees,
  })
})

router.get('/create', async (req: Request, res: Response) => {
  const coffee: Coffee = new Coffee()
  coffee.name = 'HOT 카페라떼'

  await coffeeRepository.save(coffee)

  res.json({
    success: true,
    coffee,
  })
})

export default router
