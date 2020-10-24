import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Coffee from './coffee.entity'
import Store from './store.entity'

@Entity()
export class Stock {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int' })
    quantity: number;

    @OneToOne(() => Store)
    @JoinColumn()
    store: Store;

    @OneToMany(() => Coffee, coffee => coffee.stock)
    coffees: Coffee[];
}


