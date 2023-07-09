import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signupStyles } from '../styles/SignupStyles';

const Signup: React.FC = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const classes = signupStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authContext.signup(email, password);
      history.push('/dashboard');
    } catch {
      setError('Failed to create an account');
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSignup}>
        <label>
          Email
          <input type="email" onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" onChange={e => setPassword(e.target.value)} required />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;