# Welcome to   UserAuthService
This is a simple user authentication service that uses JWT using Passport for authentication and authorization. It uses MySQL as the database and Sequelize as the ORM. It also uses nodemailer to send emails to the user. The server is built using Express.js.

## Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following environment variables
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
PORT=3000

```
4. Run `npm start`
5. The server will start at `http://localhost:3000`

## Features
1. User registration
2. User login
3. User logout
4. User profile update
5. User password reset
6. User email verification
7. User password change


## Scope for Improvement
1. Add more error handling
2. Add more validations
3. Add more tests
4. Add more features
5. Add more documentation



TO create the db run the following command

```bash
npx sequelize db:create
```

to create a model run the following command
```bash
npx sequelize model:generate --name User --attributes email:string,password:string
```

to create a model run the following command
```bash
npx sequelize model:generate --name Role --attributes name:string
```
