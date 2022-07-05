import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'

class Server {
  private app: express.Express
  private port: number = 5000

  constructor() {
    const app: express.Express = express()
    this.app = app
  }

  loadServerEnvironment() {
    console.log('환경변수를 로딩합니다.')
  }

  setMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(cors())
  }

  listen() {
    this.loadServerEnvironment()
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
