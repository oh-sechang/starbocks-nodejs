import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { SizeType } from '../type/SizeType'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  name: string

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string

  @Column({
    type: 'enum',
    enum: SizeType,
    default: SizeType.REGULAR,
  })
  sizeType: SizeType

  @Column({
    type: 'int',
    default: 0,
  })
  price: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  priceBySize(): number {
    switch (this.sizeType) {
      case SizeType.REGULAR:
        return this.price
      case SizeType.GRANDE:
        return this.price + this.price * 0.1
      case SizeType.VENTI:
        return this.price + this.price * 0.2
      default:
        return this.price
    }
  }
}
