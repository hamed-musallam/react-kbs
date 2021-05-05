import { HashRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Navigation from './Navigation';
import Team from './Team';

export function App() {
  return (
    <HashRouter>
      <div className="flex flex-row w-screen h-screen">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </div>
    </HashRouter>
  );
}
