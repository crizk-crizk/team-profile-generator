const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
const manager = new Manager('Ana', 1234, 'ana@corp.com', 212);
//console.log('manager: ', manager);
console.log('Role: ', manager.getRole());