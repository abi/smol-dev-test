import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { DashboardStyles } from '../styles/DashboardStyles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await signOut();
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={DashboardStyles.container}>
      <h1>Welcome, {user?.displayName}</h1>
      <button style={DashboardStyles.button} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;