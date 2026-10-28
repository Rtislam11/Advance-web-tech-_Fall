import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Product } from '../products/product.entity';
import { Employee } from '../employees/employee.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'product_management',
  entities: [Product, Employee],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
