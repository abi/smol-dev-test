import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { GlobalStyle } from './styles/global';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;