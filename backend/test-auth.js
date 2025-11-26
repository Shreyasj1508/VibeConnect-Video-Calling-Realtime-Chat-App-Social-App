
import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api/auth';

async function testAuth() {
  try {
    const email = `test${Date.now()}@example.com`;
    const password = 'password123'; // > 6 chars
    const fullName = 'Test User';

    console.log('Testing Signup with 6+ char password...');
    try {
      const signupRes = await axios.post(`${BASE_URL}/signup`, {
        email,
        password,
        fullName
      });
      console.log('Signup Success:', signupRes.data.success);
    } catch (err) {
      console.error('Signup Failed:', err.response?.data || err.message);
    }

    console.log('Testing Login with correct password...');
    try {
      const loginRes = await axios.post(`${BASE_URL}/login`, {
        email,
        password
      });
      console.log('Login Success:', loginRes.data.success);
    } catch (err) {
      console.error('Login Failed:', err.response?.data || err.message);
    }

    console.log('Testing Signup with < 6 char password...');
    try {
      await axios.post(`${BASE_URL}/signup`, {
        email: `fail${Date.now()}@example.com`,
        password: '123',
        fullName
      });
      console.log('Signup with short password unexpectedly succeeded');
    } catch (err) {
      console.log('Signup with short password failed as expected:', err.response?.data?.message);
    }

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

testAuth();
