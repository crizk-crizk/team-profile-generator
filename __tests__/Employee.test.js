const Employee = require('../lib/Employee.js');

test('creates employee object with correct data', () => {
  const employeeTest = new Employee('John', '44', 'John@corp.com')
    expect(employeeTest.name).toEqual('John');
    expect(employeeTest.id).toEqual('44');
    expect(employeeTest.email).toEqual('John@corp.com');
});

