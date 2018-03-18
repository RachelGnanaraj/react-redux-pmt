import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import App from '../App/App.js';

class Root extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object.isRequired,
  };

  render() {
    const {
      app,
    } = this.props;

    if (app.storage.loading) {
      return null;
    }

    if (app.storage.error) {
      return (
        <div>Error while loading storage: {JSON.stringify(app.storage.error)}</div>
      );
    }

    return <Route component={App}/>;
  }
}

export default connect(state => ({
  app: state.app,
}))(Root);
