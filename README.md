# node-restapi
Project Assignment: Simple REST API 
***Overview

This project is a simple REST API built using Node.js and Express. It provides endpoints for managing users, expenses, and income. Firebase is used as the database for storing data.


***Features

-User Management (Create, Read, Update, Delete users)
-Expense Tracking (Create, Read, Update, Delete expenses)
-Income Management (Create, Read, Update, Delete income)
-Secure environment variables using .env
-Error handling for requests

***Getting Started:
**Install dependancies:
-npm install express
-npx nodemon filename
-npm install dotenv
**Set up environment variables:
-Create a .env file in the express/ directory.
-Add Firebase credentials and other sensitive information.
-The server will run on http://localhost:5000.

***API Endpoints

Users

GET /users - Retrieve all users
POST /users - Add a user
PUT /users/:id - Update user
DELETE /users/:id - Delete user

Expenses

GET /expenses - Retrieve all expenses
POST /expenses - Add expense
PUT /expenses/:id - Update expense
DELETE /expenses/:id - Delete expense

Income

GET /income - Retrieve all income
POST /income - Add income
PUT /income/:id - Update income
DELETE /income/:id - Delete income

***Technologies used
-Backend: Node.js, Express
-Database: Firebase

***Summary

A minimal, efficient REST API for managing users, expenses, and income with Firebase storage.
