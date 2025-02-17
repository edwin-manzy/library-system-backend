# Library System Backend Project

## Overview
This project is a backend application built with **Express.js** and **TypeScript**, following the **Model-Controller-Service (MCS) architecture**. It includes **MongoDB** for data persistence and **JWT** for authentication.

## Features
- Express.js for API routing
- TypeScript for type safety
- MongoDB with Mongoose for database management
- JSON Web Tokens (JWT) for authentication
- Jest for unit testing
- ESLint for code quality enforcement

---

## Getting Started

### 1. Clone the Repository
```sh
git clone <repository_url>
cd <project_directory>
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Setup Environment Variables
Rename `sample.env` to `.env` and configure the necessary environment variables:
```sh
mv sample.env .env
```
Make sure to update `.env` with the required settings, such as database credentials, JWT secrets, etc.

### 4. Generate a Private Key for JWT
A private key is required for JWT encryption. Place your private key file inside `src/private/`.

Example command to generate a key:
```sh
openssl genrsa -out src/private/jwtRS256.key 2048
```
Ensure this file is not committed to version control.

### 5. Start the Application
For development mode with hot-reloading:
```sh
npm run start:dev
```

### 6. Run Tests
Run all tests:
```sh
npm test
```
Watch mode for tests:
```sh
npm run test:watch
```
Run all tests in watch mode:
```sh
npm run test:watchAll
```

---

## Project Structure
The project follows the **Model-Controller-Service (MCS) architecture**, ensuring a clean separation of concerns:
```
/src
│── controllers  # Handles API requests and responses
│── models       # Defines Mongoose schemas and models
│── services     # Business logic layer
│── routes       # Express route definitions
│── private      # Private keys for JWT
│── utils        # Utility functions
│── server.ts    # Entry point of the application
```

---

## Code Guidelines
- **Controllers** should only handle HTTP requests and delegate business logic to services.
- **Services** contain business logic and interact with models.
- **Models** define the database schema using Mongoose.
- Use **ESLint** to enforce coding standards.

Run ESLint:
```sh
npm run lint
```

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit and push (`git commit -m "Added new feature" && git push origin feature-branch`)
5. Submit a pull request

---

## License
This project is licensed under the [MIT License](LICENSE).

