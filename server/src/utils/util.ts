import logger from 'loglevel'
import express from 'express'

const asyncWrapper = (asyncFn: Function) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      return await asyncFn(req, res, next)
    } catch (error) {
      logger.error(error.stack)
      res.status(500).json({ message: error.message, error })
    }
  }
}

export { asyncWrapper }
