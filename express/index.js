
// Import required modules
const express = require("express");
const dotenv = require("dotenv");
// Import route handlers
const usersRouter = require("./routes/users"); 
const incomeRouter = require("./routes/income");
const expensesRouter = require("./routes/expenses");

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 5000; // Set port from environment or default to 5000

app.use(express.json());

// Register API Routes
app.use("/users", usersRouter);
app.use("/income", incomeRouter);
app.use("/expenses", expensesRouter);

// Root endpoint providing API information
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the REST API", endpoints: ["/users", "/income", "/expenses"] });
});

// Start the server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
