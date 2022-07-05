import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: '성공적으로 조회되었습니다.',
  })
})

export default router
