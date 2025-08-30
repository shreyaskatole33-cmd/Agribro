# Agri Market Backend (Express + Sequelize)

A clean REST API for your agriculture marketplace. Default DB is **SQLite** for easy local dev; switchable to MySQL/Postgres via env.

## Quick Start
```bash
cd agri-market-backend
cp .env.example .env
npm install
npm run dev
```
Visit `http://localhost:$PORT/` (default 4000).

## Auth
- `POST /api/auth/register` { name, email, password, role: farmer|vendor|logistics|service_provider }
- `POST /api/auth/login` { email, password } → { token }

Add header `Authorization: Bearer <token>` for protected routes.

## Crops
- `GET /api/crops`
- `GET /api/crops/:id`
- `POST /api/crops` (farmer) { crop_name, quantity, unit_price?, variety?, harvest_date?, description? }
- `PUT /api/crops/:id` (owner farmer)
- `DELETE /api/crops/:id` (owner farmer)

## Bids
- `POST /api/bids` (vendor) { crop_id, bid_amount, quantity_requested }
- `GET /api/bids/crop/:crop_id`
- `PUT /api/bids/:id` { status }

## Logistics
- `GET /api/logistics/requests`
- `POST /api/logistics/requests`
- `PUT /api/logistics/requests/:id` { status }

## Services
- `GET /api/services`
- `POST /api/services` (service_provider)
- `GET /api/services/requests`
- `POST /api/services/requests` (farmer)

## Transactions
- `GET /api/transactions` (auth)
- `POST /api/transactions` (auth)

## Switch DB to MySQL/Postgres
Edit `.env`:
```
DB_DIALECT=mysql  # or postgres
DB_HOST=localhost
DB_PORT=3306      # or 5432 for Postgres
DB_NAME=agri_market
DB_USER=root
DB_PASS=...
```
For MySQL install `mysql2`: `npm i mysql2`. For Postgres install `pg pg-hstore`: `npm i pg pg-hstore`.

## Notes
- This is a starter. Add pagination, validation (celebrate/zod), and ownership checks where needed.
- Never commit your real `.env` or JWT secret.
# AgricultureProjectBackend
