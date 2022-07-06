import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Product } from './Product'

@Entity()
export class ProductBasketItem {
  @PrimaryGeneratedColumn()
  id: number

  product: Product

  @Column({
    type: 'int',
    default: 0,
  })
  quantity: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export type ProductBasketItemType = {
  item: Product
  quantity: number
}

export class ProductBasket {
  items: [ProductBasketItem]

  addItem(itemType: ProductBasketItemType) {
    const item: ProductBasketItem = new ProductBasketItem()
    item.product = itemType.item
    item.quantity = itemType.quantity
    this.items.push(item)
  }
}
