import {
  ProductBasket,
  ProductBasketItem,
  ProductBasketItemType,
} from './ProductBasket'
import { Product } from './Product'

export interface ProductOrder {
  createBasketItem(product: Product, quantity: number): void
  removeBasketItem(product: Product): void
}

export class ProductOrderImpl implements ProductOrder {
  private productBasket: ProductBasket

  constructor(productBasket: ProductBasket) {
    this.productBasket = productBasket
  }

  createBasketItem(product: Product, quantity: number): void {
    console.log('아이템을 추가하였습니다.')

    const itemType: ProductBasketItemType = {
      item: product,
      quantity: quantity,
    }
    this.productBasket.addItem(itemType)
  }

  removeBasketItem(product: Product): void {
    const items: ProductBasketItem[] = this.productBasket.items
    const indexOfItem = items.findIndex((item) => item.product.id == product.id)

    if (indexOfItem < 0) {
      throw new Error('아이템을 찾을 수 없습니다.')
    } else {
      items.splice(indexOfItem, 1)
      this.productBasket.items = items
      console.log('아이템을 삭제하였습니다.')
    }
  }
}
