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

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
