import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import itemRouter from './route/itemRouter'
import AppDataSource from './datasource'

class Server {
  private app: express.Express
  private port: number = 5000

  constructor() {
    const app: express.Express = express()
    this.app = app
  }

  loadServerEnvironment() {
    console.info('환경변수를 로딩합니다.')
  }

  setMiddlewares() {
    console.info('미들웨어 설정을 등록합니다.')
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(cors())
  }

  setRoutes() {
    console.info('라우터를 등록합니다.')
    this.app.use('/api/v1/items', itemRouter)
  }

  initDataSource() {
    AppDataSource.initialize()
      .then(() => {
        console.log('데이터베이스를 초기화 합니다.')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  listen() {
    this.loadServerEnvironment()
    this.setMiddlewares()
    this.setRoutes()
    this.initDataSource()
    this.app.listen(this.port, () => {
      console.log(`app listening at ${this.port}`)
    })
  }
}

function run() {
  const server: Server = new Server()
  server.listen()
}

run()
