import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import {
  ProductBasket,
  ProductBasketItem,
  ProductBasketItemType,
} from './ProudctBasket'
import { Product } from './Product'

export interface ProductOrder {
  createBasketItem(product: Product, quantity: number): void
  removeBasketItem(product: Product, quantity: number): void
}

export class ProductOrderImpl implements ProductOrder {
  private productBasket: ProductBasket

  constructor(productBasket: ProductBasket) {
    this.productBasket = productBasket
  }

  createBasketItem(product: Product, quantity: number): void {
    const itemType: ProductBasketItemType = {
      item: product,
      quantity: quantity,
    }
    this.productBasket.addItem(itemType)
  }

  removeBasketItem(product: Product, quantity: number): void {
    console.log('아이템을 삭제하였습니다.')
  }
}
