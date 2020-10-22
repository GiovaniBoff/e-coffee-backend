import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Stock } from './stock.entity'

enum CoffeeEnumType {
    'black',
    'latte',
    'with milk',
    'cappuccino',
    'americano',
    'espresso',
    'doppio',
    'cortado',
    'red eye',
    'galão',
    'lungo'
}



@Entity()
export class Coffee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: '80' })
    name: string;

    @Column({ type: 'int' })
    coffeeType: CoffeeEnumType;

    @Column({ type: 'numeric' })
    price: number;

    @ManyToOne(() => Stock, stock => stock.coffees)
    stock: Stock;
}