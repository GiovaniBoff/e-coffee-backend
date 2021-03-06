import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Store {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 80 })
    name: string;

    @Column({ type: 'smallint' })
    popularity: number;
}