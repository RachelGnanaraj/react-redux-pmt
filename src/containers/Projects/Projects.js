import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as projectsActions from '../../actions/projects.js';
import Search from '../../components/Search/Search.js';
import ItemsList from '../../components/ItemsList/ItemsList.js';

import './Projects.css';

class Projects extends React.PureComponent {
  static propTypes = {
    projects: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    editingId: null,
    search: '',
  };

  handleSelect = project => {
    const { history } = this.props;
    history.push(`/projects/${project.id}`);
  }

  handleEdit = project => {
    this.setState({
      editingId: project.id,
    });
  }

  handleSave = project => {
    if (project.id === 'new') {
      // create
      this.props.dispatch(projectsActions.add(project));
    } else {
      // edit
      this.props.dispatch(projectsActions.edit(project));
      this.handleCancel();
    }
  }

  handleCancel = project => {
    this.setState({
      editingId: null,
    });
  }

  handleRemove = project => {
    this.props.dispatch(projectsActions.remove(project));
  }

  handleSearchChange = value => {
    this.setState({
      search: value,
    });
  }

  render() {
    const {
      projects,
    } = this.props;

    const filteredProjects = projects.items.filter(project =>
      project.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
    ).sort((a, b) => a.title.localeCompare(b.title));

    return (
      <div className="projects-component">
        {projects.items.length > 0 &&
          <div className="search-wrapper">
            <Search
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>
        }

        {projects.items.length === 0 ?
          <div className="placeholder">
            <p>
              You have no projects yet.<br/>
              Feel free to add new projects below!
            </p>
          </div>
          :
          filteredProjects.length === 0 &&
            <div className="no-results">
              <p>No results</p>
            </div>
        }

        <ItemsList
          type="projects"
          items={filteredProjects}
          editingId={this.state.editingId}
          onSelect={this.handleSelect}
          onEdit={this.handleEdit}
          onSave={this.handleSave}
          onCancel={this.handleCancel}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default connect(state => ({
  projects: state.projects,
}))(Projects);
