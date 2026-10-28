# Product Management API — NestJS Lab Task 1

## Student details
- SL: [Your SL]
- Name: [Your name]
- Student ID: [Your ID]
- Section: [Your section]

## Stack
NestJS, TypeScript, PostgreSQL, TypeORM migrations, Postman.

## Setup
1. Install Node.js LTS and PostgreSQL.
2. In pgAdmin, create a database named `product_management` owned by your PostgreSQL user.
3. Copy `.env.example` to `.env` and set your local PostgreSQL password. Never commit `.env`.
4. Install dependencies: `npm install`
5. Run the schema migration: `npm run migration:run`
6. Start the API: `npm run start:dev`
7. API base URL: `http://localhost:3000`

## Migration
The migration creates both `products` and `employees` tables. Schema synchronization is disabled; use migrations to manage the schema.

## Endpoints
### Products
- `POST /products` — create product
- `GET /products` — list products
- `GET /products/:id` — get one product
- `PATCH /products/:id` — update product
- `DELETE /products/:id` — delete product

Product body example:
```json
{"name":"Notebook","category":"Stationery","price":120.5,"quantity":25}
```

### Employees
- `POST /employees` — create employee
- `GET /employees` — list employees
- `GET /employees/:id` — get one employee
- `PATCH /employees/:id` — update employee
- `DELETE /employees/:id` — delete employee

Employee body example:
```json
{"name":"Amina Rahman","email":"amina@example.com","phone":"01700000000","password":"dummy123","age":25,"yearsOfWorking":2}
```

Employee passwords are not returned by read endpoints. This is a lab dummy-password field, not production authentication; production passwords must be hashed.

## Postman evidence
Create at least two products and save screenshots in `screenshots/` using the seven filenames required by the lab handout. Each screenshot must show HTTP method, full URL, status, and response; POST/PATCH screenshots must show the JSON body.

## GitHub submission
Place this project in `Main Repo/Mid/Lab task 1/product-management-api`. Do not commit `node_modules/`, `dist/`, or `.env`. Commit `.env.example`, source, README, and screenshots.
