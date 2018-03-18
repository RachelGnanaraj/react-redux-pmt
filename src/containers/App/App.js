import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

// import * as appActions from '../../actions/app.js';
import ProtectedRoute from '../../containers/ProtectedRoute/ProtectedRoute.js';
import Header from './components/Header/Header.js';
import Projects from '../Projects/Projects.js';
import Features from '../Features/Features.js';
import Todos from '../Todos/Todos.js';

import './App.css';

class App extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };

  // handleLogout = e => {
  //   e.preventDefault();
  //
  //   if (window.confirm('Do you really want to logout?')) {
  //     this.props.dispatch(appActions.logout());
  //   }
  // }

  render() {
    return (
      <div className="app-component">
        <Header/>

        <div className="app-container">
          <div className="app-content">
            <Switch>
              <ProtectedRoute exact path="/" component={Projects}/>
              <ProtectedRoute exact path="/projects/:projectId" component={Features}/>
              <ProtectedRoute exact path="/projects/:projectId/features/:featureId" component={Todos}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
}))(App);
