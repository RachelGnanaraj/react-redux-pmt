import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as featuresActions from '../../actions/features.js';
import Search from '../../components/Search/Search.js';
import ItemsList from '../../components/ItemsList/ItemsList.js';

import './Features.css';

class Features extends React.PureComponent {
  static propTypes = {
    features: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    editingId: null,
    search: '',
  };

  handleSelect = feature => {
    const { history } = this.props;
    history.push(`/projects/${feature.project_id}/features/${feature.id}`);
  }

  handleEdit = feature => {
    this.setState({
      editingId: feature.id,
    });
  }

  handleSave = feature => {
    if (feature.id === 'new') {
      // create
      const { projectId } = this.props.match.params;
      this.props.dispatch(featuresActions.add(feature, projectId));
    } else {
      // edit
      this.props.dispatch(featuresActions.edit(feature));
      this.handleCancel();
    }
  }

  handleCancel = feature => {
    this.setState({
      editingId: null,
    });
  }

  handleRemove = feature => {
    this.props.dispatch(featuresActions.remove(feature));
  }

  handleSearchChange = value => {
    this.setState({
      search: value,
    });
  }

  render() {
    const {
      features,
    } = this.props;

    const filteredFeatures = features.filter(feature =>
      feature.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
    ).sort((a, b) => a.title.localeCompare(b.title));

    return (
      <div className="features-component">
        {features.length > 0 &&
          <div className="search-wrapper">
            <Search
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>
        }

        {features.length === 0 ?
          <div className="placeholder">
            <p>
              This project has no features yet.<br/>
              Feel free to add new features below!
            </p>
          </div>
          :
          filteredFeatures.length === 0 &&
            <div className="no-results">
              <p>No results</p>
            </div>
        }

        <ItemsList
          type="features"
          items={filteredFeatures}
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

function mapStateToProps(state, props) {
  const { projects } = state;
  const { projectId } = props.match.params;
  const currentProject = projects.items.find(item => item.id === projectId);
  return {
    features: currentProject.features,
  };
}

export default connect(mapStateToProps)(Features);
