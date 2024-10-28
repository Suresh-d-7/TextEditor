import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const users = {
  Admin: { username: 'John Doe', password: 'johndoe@123' },
  User: { username: 'Nick', password: 'Nick@123' },
  Guest: { username: 'Guest', password: 'guest@123' },
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const role = Object.keys(users).find(
      key => users[key].username === username && users[key].password === password
    );
    if (role) {
      setError(''); // Clear any previous errors
      alert(`Logged in as ${role}`);
      navigate('/editor'); // Navigate to editor page
    } else {
      setError('Invalid credentials, please try again.'); // Set error message
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>} {/* Error message */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
          />
          <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
