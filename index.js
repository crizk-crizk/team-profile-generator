const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//storage class data
const data = { manager: null, engineers: [], interns: [] };
let finishPrompts = false;

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

  //stop building team until user chooses to end prompts
  function promptNextMove () {
    // Questions for additional employee
inquirer
.prompt([
  {
    type: "list",
    name: "nextStep",
    message: "Choose the next step",
    choices: ['Add engineer', 'Add intern', 'Done']
  },
])
.then((choice) => {
  // Instance of manager
  const userDecision = choice.nextStep;
  if (userDecision === 'Done') {
    finishPrompts = true;
  } else {
      
  }
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

  }