import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createStore1603458849679 implements MigrationInterface {
    private table = new Table({
        name: 'store',
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
                length: '255'
            },
            {
                name: 'popularity',
                type: 'smallint'
            }
        ]
    })
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
    }

}
