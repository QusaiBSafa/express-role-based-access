# Infrastructure Overview
This application consists of an Express server handling API requests with role-based access control.

## Data Models
- **User**: Represents a user in the system.
  - `id`: string
  - `username`: string
  - `password`: string (hashed)
  - `role`: string (e.g., 'admin', 'user')

## API Design
- `POST /login`: Authenticates user and returns JWT.
- `GET /users`: Returns all users (Admin role required).
- `GET /profile`: Returns the authenticated user's profile.

## Key Decisions
- Using JWT for authentication.
- Middleware for role checks to restrict access to certain routes.