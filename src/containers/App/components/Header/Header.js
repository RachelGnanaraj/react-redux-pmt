import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';

import './Header.css';

function getTitle(pathname, projects, features) {
  if (pathname.includes('/features/')) {
    const slicedPath = pathname.split('/');
    const projectId = slicedPath[2];
    const project = projects.items.find(item => item.id === projectId);
    const featureId = slicedPath[4];
    const feature = project.features.find(item => item.id === featureId);
    return (
      <span>{feature && feature.title}</span>
    );
  } else if (pathname.includes('/projects/')) {
    const slicedPath = pathname.split('/');
    const projectId = slicedPath[2];
    const project = projects.items.find(item => item.id === projectId);
    return (
      <span>{project && project.title}</span>
    );
  } else {
    return (
      <span>Projects</span>
    );
  }
}

export const Header = ({ location, history, projects }) => (
  <div className="header-component">
    <AppBar
      title={getTitle(location.pathname, projects)}
      iconElementRight={
        location.pathname !== '/' ?
          <FlatButton label="Back" onClick={() => history.goBack()}/>
          :
          null
      }
    />
  </div>
);

Header.propTypes = {
  projects: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(state => ({
  projects: state.projects,
}))(Header));
