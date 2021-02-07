const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateHtml = require("./generatehtml.js");
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
    promptNextMove();
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//add engineer
function addEngineer() {
  // Questions for additional employee
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter engineer name ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter engineer email address ",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Enter engineer GitHub user name ",
      },
    ])
    .then((engineer) => {
      // Instance of engineer
      const newEngineer = new Engineer(
        engineer.name,
        engineer.id,
        engineer.email,
        engineer.gitHub
      );
      console.log(newEngineer);
      data.engineers.push(newEngineer);
      promptNextMove();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

//add intern
function addIntern() {
  // Questions for additional employee
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter intern name ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter intern ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter intern email address ",
      },
      {
        type: "input",
        name: "school",
        message: "Enter intern school name ",
      },
    ])
    .then((intern) => {
      // Instance of engineer
      const newIntern = new Intern(
        intern.name,
        intern.id,
        intern.email,
        intern.school
      );
      console.log(newIntern);
      data.interns.push(newIntern);
      promptNextMove();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

//prompt next move
function promptNextMove() {
  // Questions for enginneer
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextStep",
        message: "Choose the next step",
        choices: ["Add engineer", "Add intern", "Done"],
      },
    ])
    .then((choice) => {
      // Instance of manager
      const userDecision = choice.nextStep;
      if (userDecision === "Add engineer") {
        addEngineer();
      } else if (userDecision === "Add intern") {
        addIntern();
      } else {
        console.log(data);
        // call build HTML function here
        try {
          console.log('ok');
          generateHtml(data);
        } catch(e) {
          console.log('error generating html', e)// throws ReferenceError: ok is not defined
        }
      }
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error(error)
      } else {
        // Something else went wrong
        console.error(error)
      }
    });
}

//••••••••••••••••••••••//
//
