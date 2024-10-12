# Employee Management System

## Overview

The Employee Management System is a console-based Node.js application that helps manage employee data. It allows you to:

- Add new employees.
- List all employees.
- Filter employees based on various criteria (ID, name, salary, or email).
- Delete employees by their ID.

## Features

- **Add Employee**: Input employee details like ID, name, salary, and email.
- **Auto-generate ID**: If no ID is provided, the system will generate one based on the latest employee entry.
- **Filter Employees**: Search for employees using criteria like ID, name, salary, or email. There is also an option to filter employees with salaries greater than, less than, or equal to a given value.
- **Delete Employee**: Remove an employee from the system by their ID.
- **Error Handling**: Validates input data to ensure proper functionality (e.g., ensuring valid email addresses and numeric values for salary).

## Technologies Used

## Technologies Used

- **Node.js**: The main programming language used to develop the application, allowing JavaScript code to run on the server.
- **prompt-sync**: A library used for synchronous user input in the console, making it easy to interact with users.

## How to Use

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd number-guessing-game
   ```
3. **Install dependencies**:  
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

4. **Run the game**:

   ```bash
   node index.js
   ```

5. Follow the prompts in the console to manage employee data.

## Conclusion

Feel free to use and modify this Employee Management System as per your needs, and enjoy the freedom of managing employee data effectively!
