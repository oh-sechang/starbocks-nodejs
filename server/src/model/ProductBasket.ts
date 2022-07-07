import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { Product } from './Product'

@Entity()
export class ProductBasketItem {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Product, (product) => product.id)
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
  private _items: ProductBasketItem[]

  constructor() {
    this._items = []
  }

  addItem(itemType: ProductBasketItemType) {
    const item: ProductBasketItem = new ProductBasketItem()
    item.product = itemType.item
    item.quantity = itemType.quantity
    this._items.push(item)
  }

  get items(): ProductBasketItem[] {
    return this._items
  }

  set items(items: ProductBasketItem[]) {
    this._items = items
  }

  totalPrice(): number {
    let total: number = 0
    this._items.forEach((item) => {
      total += item.product.priceBySize() * item.quantity
    })
    return total
  }
}
