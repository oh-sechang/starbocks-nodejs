import { Product } from '../model/Product'
import { ProductOrderImpl, ProductOrder } from '../model/ProductOrder'
import { ProductBasket, ProductBasketItem } from '../model/ProductBasket'
import { SizeType } from '../type/SizeType'
import productRepository from './productRepository'
import AppDataSource from '../datasource'
import { DataSource } from 'typeorm'

const initDataSource = async () => {
  await AppDataSource.initialize()
}

const closeDataSource = async () => {
  await AppDataSource.destroy()
}

beforeAll(async () => {
  await initDataSource()
})

afterAll(async () => {
  await closeDataSource()
})

beforeEach(async () => {
  await productRepository.delete({})
})

afterEach(async () => {
  await productRepository.delete({})
})

test('장바구니 담기', async () => {
  const product: Product = new Product()
  product.name = '아이스아메리카노'
  product.price = 3500
  product.sizeType = SizeType.REGULAR

  const product2: Product = new Product()
  product2.name = '딸기 프라푸치노'
  product2.price = 5500
  product2.sizeType = SizeType.REGULAR

  await productRepository.save(product)
  await productRepository.save(product2)

  const products: Product[] = await productRepository.find()

  expect(products.length).toBe(2)
})
