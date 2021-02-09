const Manager = require('../lib/Manager.js');

test('creates Manager object with correct data', () => {
  const managerTest = new Manager('Dila', '40', 'Dila@corp.com', '1040')
    expect(managerTest.name).toEqual('Dila');
    expect(managerTest.id).toEqual('40');
    expect(managerTest.email).toEqual('Dila@corp.com');
    expect(managerTest.officeNumber).toEqual('1040');
});
