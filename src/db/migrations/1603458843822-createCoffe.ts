import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createCoffe1603458843822 implements MigrationInterface {
    private table = new Table({
        name: 'coffee',
        columns: [
            {
                name: 'id',
                type: 'int4',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'name',
                type: 'varchar',
                length: '80'
            },
            {
                name: 'price',
                type: 'Numeric',
            }

        ]
    })
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(this.table)
    }

}
