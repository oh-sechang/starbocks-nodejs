import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { ProductBasketItem } from './ProductBasket'

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 30,
  })
  invoiceNumber: string

  @OneToMany(() => ProductBasketItem, (basketItem) => basketItem.invoice)
  productBasketItems: ProductBasketItem[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
