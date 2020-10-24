import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class createStock1603456231082 implements MigrationInterface {
    private table = new Table({
        name: 'stock',
        columns: [
            {
                name: 'id',
                type: 'int4',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'coffee_id',
                type: 'int'
            },
            {
                name: 'store_id',
                type: 'int'
            },
            {
                name: 'quantity',
                type: 'integer'
            }
        ]
    });

    private foreignKeyCoffee = new TableForeignKey({
        columnNames: ['coffe_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        referencedTableName: 'coffee'
    })

    private foreignKeyStore = new TableForeignKey({
        columnNames: ['store_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        referencedTableName: 'store'
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
    }

}
