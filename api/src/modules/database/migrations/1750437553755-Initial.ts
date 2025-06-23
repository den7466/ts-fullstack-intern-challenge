import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1750437553755 implements MigrationInterface {
  name = 'Initial1750437553755';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "likes" ("like_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cat_id" character varying NOT NULL, "created_at" date, CONSTRAINT "PK_4b698ab917e6a07411bb250e597" PRIMARY KEY ("like_id")); COMMENT ON COLUMN "likes"."like_id" IS 'Идентификатор лайка'; COMMENT ON COLUMN "likes"."cat_id" IS 'Идентификатор котика из https://thecatapi.com'; COMMENT ON COLUMN "likes"."created_at" IS 'Время создания лайка'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "likes"`);
  }
}
