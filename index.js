const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//storage class data
const data = { manager: null, engineers: [], interns: [] };

// Questions for manager
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter manager name ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address ",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter office number ",
    },
  ])
  .then((manager) => {
    // Instance of manager
    const newManager = new Manager(
      manager.name,
      manager.id,
      manager.email,
      manager.officeNumber
    );
    console.log("manager: ", newManager);
    data.manager = newManager;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
