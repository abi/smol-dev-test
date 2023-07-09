import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { LoginStyles } from '../styles/LoginStyles';

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const { login } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/dashboard');
    } catch {
      setError('Failed to log in');
    }
  };

  return (
    <div style={LoginStyles.container}>
      <form onSubmit={handleSubmit} style={LoginStyles.form}>
        <label>
          Email
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            style={LoginStyles.input}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={LoginStyles.input}
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit" style={LoginStyles.button}>Log In</button>
      </form>
    </div>
  );
};

export default Login;