import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  price: number;

  @Column()
  location: string;

  @Column()
  transmission: string;

  @Column()
  mileage: string;

  @Column()
  color: string;

  @Column({ default: 'no Image' })
  image: string;
}