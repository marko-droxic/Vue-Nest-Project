import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class JobsTable1671666875721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('RUnning migrationssss')
        await queryRunner.createTable(
            new Table({
                name: 'jobs',
                columns: [
                    {
                        name: 'id',
                        type: 'int4',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            }),
            false,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE jobs`);
    }

}
