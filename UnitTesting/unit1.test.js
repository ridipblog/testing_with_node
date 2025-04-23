const unit1 =require('./unit1');

// Test add method 
test('adds 1 + 2 to equal 3', async () => {
  expect(await unit1.add(1, 2)).toBe(3);
});