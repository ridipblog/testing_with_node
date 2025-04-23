
exports.registerUser = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  
  return {
    email,
    createdAt: new Date().toISOString()
  };
};
