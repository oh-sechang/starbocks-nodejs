import { Product } from './Product'
import { ProductOrderImpl, ProductOrder } from './ProductOrder'
import { ProductBasket, ProductBasketItem } from './ProudctBasket'

test('아이템주문', () => {
  const productBasket: ProductBasket = new ProductBasket()
  const productOrder: ProductOrder = new ProductOrderImpl(productBasket)

  const product: Product = new Product()
  product.name = '아이스아메리카노'

  // 생성
  productOrder.createBasketItem(product, 2)
  const basketItems: ProductBasketItem[] = productBasket.items

  expect(basketItems.length).toBe(1)
})

test('아이템삭제', () => {
  const productBasket: ProductBasket = new ProductBasket()
  const productOrder: ProductOrder = new ProductOrderImpl(productBasket)

  const product: Product = new Product()
  product.id = 1
  product.name = '아이스아메리카노'
  productBasket.addItem({
    item: product,
    quantity: 2,
  })

  // 찾을 아이템
  const product2: Product = new Product()
  product2.id = 1

  // 삭제
  productOrder.removeBasketItem(product2)
  const basketItems: ProductBasketItem[] = productBasket.items

  expect(basketItems.length).toBe(0)
})
