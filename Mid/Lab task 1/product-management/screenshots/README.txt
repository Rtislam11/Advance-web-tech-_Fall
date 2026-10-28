# Product Management API

## Student Details
- Name: MD Rifat Bin Sayed
- Student ID: 23-55550-3
- Section: B
- Lab Task: Lab Task 1

## Project Description
A NestJS REST API for managing products and employees using PostgreSQL and TypeORM.

## Technologies
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Postman

## Database Setup
1. Install PostgreSQL and open pgAdmin 4.
2. Create a database named `product_management`.
3. Copy `.env.example` to `.env`.
4. Enter your local PostgreSQL username and password in `.env`.
5. Run the database migration:

```bash
npm run migration:run
```

## Installation and Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start:dev
```

The API runs at `http://localhost:3000`.

## Product Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get one product |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## Employee Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get one employee |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## Screenshots
Postman evidence for the required product CRUD operations is available in the `screenshots/` folder.

## Database Migrations
Database tables are created using TypeORM migrations. Run `npm run migration:run` after configuring the database.
