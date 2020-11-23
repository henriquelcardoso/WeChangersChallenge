import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Organizations from './pages/Organizations'
import OrganizationDetails from './pages/OrganizationDetails'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Organizations} />
          <Route path="/organizationDetails" component={OrganizationDetails} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
