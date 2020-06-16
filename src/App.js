import React from 'react';
import './App.css';
import { Route, HashRouter, Redirect, Switch, withRouter, Link } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/list'
import Details from './pages/details'
import Mine from './pages/mine'
import Order from './pages/order'
import Reg from './pages/reg'
import Login from './pages/login'

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path='/home' component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/mine" component={Mine} />
          <Route path="/list" component={List} />
          <Route path="/details/:id" component={Details} />
          <Route path="/order" component={Order} />
          <Route path="/notfound" component={() => <div>404</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>
      </HashRouter>
    </div>


  );
}
// App = withRouter(App);

export default App;
