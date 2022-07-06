import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Coffee {
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
    nullable: true,
  })
  filename: string

  @Column({
    type: 'double',
    nullable: true,
  })
  views: number

  @Column({
    default: false,
  })
  isPublished: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
