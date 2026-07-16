# express-role-based-access

## Description
A simple Express API implementing Role-Based Access Control (RBAC) to demonstrate user role management and access restrictions.

## What's Built
- User authentication
- Role-based access control middleware
- Sample API endpoints for user management

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-role-based-access.git
   cd express-role-based-access
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```
4. Access the API at `http://localhost:3000`

## API Documentation
- `POST /login`: Authenticate a user and return a token.
- `GET /users`: Get a list of users (Admin only).
- `GET /profile`: Get the authenticated user's profile.

## Environment Variables
- `PORT`: Port to run the server (default: 3000)
- `JWT_SECRET`: Secret key for JWT signing
