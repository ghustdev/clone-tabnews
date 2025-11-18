const sum = require('../models/sum.js');

test('add 1 + 2 to equal 3', () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});

test('teste', () => {
  console.log('testando');
});

