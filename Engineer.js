const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.gitHub;
  }
}
const engineer = new Engineer("Ana", 1234, "ana@corp.com", "anaGit");
console.log("engineer: ", engineer);
console.log("anaGit" === engineer.getGithub());

module.exports = Engineer;
