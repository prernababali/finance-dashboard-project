# Finance Data Processing and Access Control Backend

A RESTful backend API for a finance dashboard system with role-based access control, built with Node.js, Express, and MongoDB.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: express-validator
- **Documentation**: Swagger UI (swagger-jsdoc + swagger-ui-express)

---

## Project Structure

finance-backend/

├── src/

│   ├── config/

│   │   └── db.js

│   ├── models/

│   │   ├── User.js

│   │   └── Transaction.js

│   ├── routes/

│   │   ├── auth.routes.js

│   │   ├── user.routes.js

│   │   ├── transaction.routes.js

│   │   └── dashboard.routes.js

│   ├── controllers/

│   │   ├── auth.controller.js

│   │   ├── user.controller.js

│   │   ├── transaction.controller.js

│   │   └── dashboard.controller.js

│   ├── middleware/

│   │   ├── authenticate.js

│   │   ├── authorize.js

│   │   └── errorHandler.js

│   ├── validators/

│   │   ├── auth.validator.js

│   │   └── transaction.validator.js

│   └── swagger/

│       └── swagger.js

├── .env
├── .gitignore
├── app.js
├── server.js
└── package.json

---

## Setup Instructions

### 1. Clone the repository
git clone <your-repo-url>
cd finance-backend

### 2. Install dependencies
npm install

### 3. Create `.env` file
PORT=5000
MONGO_URI=mongodb://localhost:27017/finance-dashboard
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

### 4. Run the server
npm run dev

### 5. Open Swagger docs
http://localhost:5000/api-docs

---

## Roles and Permissions

| Action | Viewer | Analyst | Admin |
|---|---|---|---|
| Register / Login | ✅ | ✅ | ✅ |
| View Transactions | ✅ | ✅ | ✅ |
| Create Transaction | ❌ | ✅ | ✅ |
| Update Transaction | ❌ | ✅ | ✅ |
| Delete Transaction | ❌ | ❌ | ✅ |
| View All Users | ❌ | ❌ | ✅ |
| Change User Role | ❌ | ❌ | ✅ |
| Change User Status | ❌ | ❌ | ✅ |
| Dashboard Summary | ✅ | ✅ | ✅ |
| Category Totals | ✅ | ✅ | ✅ |
| Recent Activity | ✅ | ✅ | ✅ |
| Monthly Trends | ✅ | ✅ | ✅ |

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get JWT token |

### Users (Admin only)
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Get all users |
| PATCH | /api/users/:id/role | Update user role |
| PATCH | /api/users/:id/status | Update user status |

### Transactions
| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | /api/transactions | Create transaction | Admin, Analyst |
| GET | /api/transactions | Get all transactions | All roles |
| GET | /api/transactions/:id | Get transaction by ID | All roles |
| PUT | /api/transactions/:id | Update transaction | Admin, Analyst |
| DELETE | /api/transactions/:id | Delete transaction | Admin only |

### Dashboard
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/dashboard/summary | Total income, expenses, net balance |
| GET | /api/dashboard/category-totals | Category wise totals |
| GET | /api/dashboard/recent-activity | Last 10 transactions |
| GET | /api/dashboard/monthly-trends | Monthly breakdown |

---

## Assumptions

- First registered user with role `admin` manages the system
- Soft delete is used for transactions to preserve data integrity
- Inactive users cannot login or access any API
- All dashboard routes are accessible to all roles
- Analyst can create and update but not delete transactions

## Tradeoffs

- Used MongoDB over a relational DB for flexible schema and faster development
- Soft delete chosen over hard delete to maintain audit trail
- JWT stored on client side — no refresh token implemented for simplicity
- No pagination implemented to keep the scope focused

---

## Optional Features Implemented

- ✅ JWT Authentication
- ✅ Soft Delete
- ✅ Swagger API Documentation
- 
