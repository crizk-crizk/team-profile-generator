const Engineer = require('../lib/Engineer.js');

test('creates engineer object with correct data', () => {
  const engineerTest = new Engineer('Ana', '35', 'Ana@corp.com', 'ana-git-ana')
    expect(engineerTest.name).toEqual('Ana');
    expect(engineerTest.id).toEqual('35');
    expect(engineerTest.email).toEqual('Ana@corp.com');
    expect(engineerTest.gitHub).toEqual('ana-git-ana');
});

