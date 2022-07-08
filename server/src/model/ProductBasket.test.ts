import { Product } from './Product'
import { ProductOrderImpl, ProductOrder } from './ProductOrder'
import { ProductBasket, ProductBasketItem } from './ProductBasket'
import { SizeType } from '../type/SizeType'

test('장바구니 가격', () => {
  const productBasket: ProductBasket = new ProductBasket()
  const productOrder: ProductOrder = new ProductOrderImpl(productBasket)

  const product: Product = new Product()
  product.name = '아이스아메리카노'
  product.price = 3500
  product.sizeType = SizeType.REGULAR

  const product2: Product = new Product()
  product2.name = '딸기 프라푸치노'
  product2.price = 5500
  product2.sizeType = SizeType.REGULAR

  // 생성
  productOrder.createBasketItem(product, 2)
  productOrder.createBasketItem(product2, 2)
  const totalPrice: number = productBasket.totalPrice()

  expect(totalPrice).toBe(3500 * 2 + 5500 * 2)
})
