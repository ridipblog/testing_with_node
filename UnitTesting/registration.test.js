// userService.test.js
const registration=require('./registration');

describe('registration.registerUser', () => {
  it('registers a user with valid input', async () => {
    const user = await registration.registerUser("test@example.com", '123456');
    expect(user.email).toBe('test@example.com');
    expect(user.createdAt).toBeDefined();
  });

  it('throws error if email is missing', async () => {
    await expect(registration.registerUser(null, '123456'))
      .rejects.toThrow('Email and password are required');
  });

  it('throws error if password is too short', async () => {
    await expect(registration.registerUser('test@example.com', '12345'))
      .rejects.toThrow('Password must be at least 6 characters');
  });

  it('throws error if email format is invalid', async () => {
    await expect(registration.registerUser('invalid-email', '123456'))
      .rejects.toThrow('Invalid email format');
  });

  
});
