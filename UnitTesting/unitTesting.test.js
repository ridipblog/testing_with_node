const unitTesting = require('./unitTesting');

// Test add method 
test('adds 1 + 2 to equal 3', async () => {
  expect(await unitTesting.add(1, 2)).toBe(3);
});

// Test multiply method 
test('multiply 1 * 2 muliple ', async () => {
  expect(await unitTesting.multiply(1,2)).toBe(2) ;
});