import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductsAndEmployees1760000000000 implements MigrationInterface {
  name = 'CreateProductsAndEmployees1760000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "products" (
      "id" SERIAL NOT NULL,
      "name" character varying(150) NOT NULL,
      "category" character varying(100) NOT NULL,
      "price" numeric(12,2) NOT NULL,
      "quantity" integer NOT NULL DEFAULT 0,
      CONSTRAINT "PK_products_id" PRIMARY KEY ("id"),
      CONSTRAINT "CHK_products_price_nonnegative" CHECK ("price" >= 0),
      CONSTRAINT "CHK_products_quantity_nonnegative" CHECK ("quantity" >= 0)
    )`);
    await queryRunner.query(`CREATE TABLE "employees" (
      "id" SERIAL NOT NULL,
      "name" character varying(150) NOT NULL,
      "email" character varying(255) NOT NULL,
      "phone" character varying(30) NOT NULL,
      "password" character varying(255) NOT NULL,
      "age" integer NOT NULL,
      "yearsOfWorking" integer NOT NULL DEFAULT 0,
      CONSTRAINT "PK_employees_id" PRIMARY KEY ("id"),
      CONSTRAINT "UQ_employees_email" UNIQUE ("email"),
      CONSTRAINT "CHK_employees_age" CHECK ("age" >= 0),
      CONSTRAINT "CHK_employees_experience" CHECK ("yearsOfWorking" >= 0)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "employees"');
    await queryRunner.query('DROP TABLE "products"');
  }
}
