import express, { Request, Response } from 'express'
import { Product } from '../model/Product'
import productRepository from '../repository/productRepository'
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const items: Product[] = await productRepository.findAll(10)

  res.json({
    success: true,
    message: '성공적으로 조회되었습니다.',
    items,
  })
})

router.get('/create', async (req: Request, res: Response) => {
  const item: Product = new Product()
  item.name = 'HOT 카페라떼'

  await productRepository.save(item)

  res.json({
    success: true,
    item,
  })
})

export default router
