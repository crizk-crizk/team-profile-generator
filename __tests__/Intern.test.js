const Intern = require('../lib/Intern.js');

test('creates Intern object with correct data', () => {
  const internTest = new Intern('Hank', '21', 'Hank@corp.com', 'Beekman High')
    expect(internTest.name).toEqual('Hank');
    expect(internTest.id).toEqual('21');
    expect(internTest.email).toEqual('Hank@corp.com');
    expect(internTest.school).toEqual('Beekman High');
});
