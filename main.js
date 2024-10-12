const prompt = require("prompt-sync")({ sigint: true });

let employees = [];

const valid_id = () => {
  let id;
  let exists;
  let is_valid_id;

  do {
    id = prompt("Enter employee ID (Press Enter to auto-generate): ");

    if (id === "") {
      if (employees.length > 0) {
        id = employees[employees.length - 1].id + 1;
      } else {
        id = 1;
      }
      console.log(`Generated ID: ${id}`);
      is_valid_id = true;
      exists = false;
    } else {
      is_valid_id = Number.isInteger(Number(id)) && Number(id) > 0;
      if (!is_valid_id) {
        console.log("Invalid ID Please enter a valid positive integer.");
        continue;
      }

      exists = employees.some(function (employee) {
        return employee.id == id;
      });

      if (exists) {
        console.log("This ID is already taken Please enter a different ID.");
      }
    }
  } while (exists || !is_valid_id);

  return Number(id);
};

const valid_salary = () => {
  let salary;
  let is_valid_salary;
  do {
    salary = prompt("Enter employee salary: ");
    is_valid_salary = Number.isInteger(Number(salary)) && Number(salary) > 0;
    if (!is_valid_salary) {
      console.log("Invalid Salary Please enter a valid positive integer.");
    }
  } while (!is_valid_salary);
  return Number(salary);
};
const valid_name = () => {
  let name;
  let is_valid_name;
  do {
    name = prompt("Enter employee name: ");
    is_valid_name = /^[a-zA-Z]+$/.test(name);
    if (!is_valid_name) {
      console.log("Please, Enter a valid name contains only letters.");
    }
  } while (!is_valid_name);
  return name;
};
const valid_email = () => {
  let email;
  let is_valid_email;
  do {
    email = prompt("Enter employee email: ");
    is_valid_email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    if (!is_valid_email) {
      console.log("Invalid Email Please Enter a Valid Email.");
    }
  } while (!is_valid_email);
  return email;
};
const filter_by_salary = () => {
  let salary;
  let is_valid_salary = false;
  do {
    salary = Number(
      prompt(
        "Please enter a positive number for the salary to filter employees: "
      )
    );
    if (isNaN(salary) || salary <= 0) {
      console.log("Please enter a valid positive number for the salary.");
    } else {
      is_valid_salary = true;
    }
  } while (!is_valid_salary);
  let choice;
  let filteredEmployees;
  do {
    console.log(`Choose a filtering method for employees with salary:
    1: Greater than ${salary}
    2: Less than ${salary}
    3: Equal to ${salary}
    4: Between ${salary} and another value`);

    choice = prompt("Choose a filtering method (1, 2, 3 or 4): ");

    switch (choice) {
      case "1":
        filteredEmployees = employees.filter(
          (employee) => employee.salary > salary
        );
        break;
      case "2":
        filteredEmployees = employees.filter(
          (employee) => employee.salary < salary
        );
        break;
      case "3":
        filteredEmployees = employees.filter(
          (employee) => employee.salary === salary
        );
        break;
      case "4":
        let is_valid_value = false;
        let to;
        do {
          to = prompt(
            `Enter the upper limit for salary (greater than ${salary}): `
          );
          if (isNaN(to) || to <= 0) {
            console.log("Please enter a valid positive number.");
          } else {
            is_valid_value = true;
          }
        } while (!is_valid_value);
        filteredEmployees = employees.filter(
          (employee) => employee.salary >= salary && employee.salary <= to
        );
        break;
      default:
        console.log("Invalid choice. Please enter 1, 2, or 3.");
        continue;
    }

    console.log("Filtered Employees:");
    if (filteredEmployees.length > 0) {
      console.log(filteredEmployees);
    } else {
      console.log("No employees found matching the criteria.");
    }
  } while (!["1", "2", "3", "4"].includes(choice));
};

const add_employee = () => {
  let id = valid_id();
  let name = valid_name();
  let salary = valid_salary();
  let email = valid_email();

  let employee = { id, name, salary, email };

  employees.push(employee);
  console.log("Employee added successfully");
};
const list_employees = () => {
  console.log("Employee list: ");
  console.log(employees);
};
const filter_employees = () => {
  let valid_criteria = ["name", "id", "salary", "email"];
  let criteria = prompt(
    "Enter the search criteria (name, ID, salary or email): "
  ).toLowerCase();
  if (criteria == "salary") {
    filter_by_salary();
    return;
  }
  while (!valid_criteria.includes(criteria)) {
    console.log(
      "Invalid criteria. Please enter one of the following: name, ID, salary, or email."
    );
    criteria = prompt(
      "Enter the search criteria (name, ID, salary or email): "
    ).toLowerCase();
  }

  let value = prompt("Enter the value to search for: ");
  let filteredEmployees = employees.filter(
    (employee) => employee[criteria] == value
  );

  if (filteredEmployees.length > 0) {
    console.log("Filtered Employees:");
    console.log(filteredEmployees);
  } else {
    console.log("No employees found matching the criteria.");
  }
};
const delete_employee = () => {
  let id = prompt("Enter the employee ID to delete: ");

  let exists = employees.some(function (employee) {
    return employee.id == id;
  });

  if (!exists) {
    console.log("Employee not found.");
  } else {
    let index = employees.findIndex(function (employee) {
      return employee.id == id;
    });

    employees.splice(index, 1);
    console.log("Employee deleted successfully!");
  }
};
const main = () => {
  let choice;
  do {
    console.log("Options");
    let options = { 1: "Add", 2: "List", 3: "Filter", 4: "Delete", 5: "Exit" };
    console.log(options);
    choice = prompt("Choose an option: ");

    switch (choice) {
      case "1":
        add_employee();
        break;
      case "2":
        list_employees();
        break;
      case "3":
        filter_employees();
        break;
      case "4":
        delete_employee();
        break;
      case "5":
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid choice Please try again.");
    }
  } while (choice !== "5");
};
main();
