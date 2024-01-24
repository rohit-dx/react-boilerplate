```javascript
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <ProtectedRoute component={Home} path="/home" exact />
      </Switch>
    </Router>
  );
};

export default Routes;
```