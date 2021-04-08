import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './hooks/index';
import { Dashboard } from './pages/Dashboard/index';

import { GlobalStyles } from './styles/global';

export const App = () => {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
        <GlobalStyles />
        <ToastContainer position="top-right" autoClose={3000} />
      </AppProvider>
    </Router>
  );
};
