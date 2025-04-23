const unit2 =require('./unit2');
// Test multiply method 
test('multiply 1 * 2 muliple ', async () => {
  expect(await unit2.multiply(1,2)).toBe(2) ;
});