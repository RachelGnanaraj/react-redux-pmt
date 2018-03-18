import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as todosActions from '../../actions/todos.js';
import Search from '../../components/Search/Search.js';
import ItemsList from '../../components/ItemsList/ItemsList.js';

import './Todos.css';

class Todos extends React.PureComponent {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  state = {
    editingId: null,
    search: '',
  };

  handleSelect = todo => {
    this.props.dispatch(todosActions.toggle(todo));
  }

  handleEdit = todo => {
    this.setState({
      editingId: todo.id,
    });
  }

  handleSave = todo => {
    if (todo.id === 'new') {
      // create
      const { projectId, featureId } = this.props.match.params;
      this.props.dispatch(todosActions.add(todo, projectId, featureId));
    } else {
      // edit
      this.props.dispatch(todosActions.edit(todo));
      this.handleCancel();
    }
  }

  handleCancel = todo => {
    this.setState({
      editingId: null,
    });
  }

  handleRemove = todo => {
    this.props.dispatch(todosActions.remove(todo));
  }

  handleSearchChange = value => {
    this.setState({
      search: value,
    });
  }

  render() {
    const {
      todos,
    } = this.props;

    const filteredTodos = todos.filter(todo =>
      todo.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
    ).sort((a, b) => a.title.localeCompare(b.title));

    return (
      <div className="todos-component">
        {todos.length > 0 &&
          <div className="search-wrapper">
            <Search
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>
        }

        {todos.length === 0 ?
          <div className="placeholder">
            <p>
              This project feature has no todos yet.<br/>
              Feel free to add new todos below!
            </p>
          </div>
          :
          filteredTodos.length === 0 &&
            <div className="no-results">
              <p>No results</p>
            </div>
        }

        <ItemsList
          type="todos"
          items={filteredTodos}
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
  const { projectId, featureId } = props.match.params;
  const currentProject = projects.items.find(item => item.id === projectId);
  const currentFeature = currentProject.features.find(item => item.id === featureId);
  return {
    todos: currentFeature.todos,
  };
}

export default connect(mapStateToProps)(Todos);
