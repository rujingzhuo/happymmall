import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';

import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import UserList from 'page/user/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component{
  render(){
      return (
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={props => (
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/user/index" component={UserList}/>
                  <Redirect exact from="/user" to="/user/index"/>
                  <Route component={ErrorPage}/>
                </Switch>
              </Layout>
            )}/>
          </Switch>
        </Router>
      )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);