import update from 'immutability-helper';

import * as projectsActions from '../actions/projects.js';
import * as featuresActions from '../actions/features.js';
import * as todosActions from '../actions/todos.js';

const initialState = {
  loading: false,
  items: [],
};

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {

  case projectsActions.PROJECT_ADD_SUCCESS: {
    return update(state, {
      items: {$push: [action.payload.project]},
    });
  }

  case projectsActions.PROJECT_EDIT_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(item => {
        if (item.id === action.payload.project.id) {
          return action.payload.project;
        }
        return item;
      })},
    });
  }

  case projectsActions.PROJECT_REMOVE_SUCCESS: {
    return update(state, {
      items: {$set: state.items.filter(item => item.id !== action.payload.project.id)},
    });
  }

  case featuresActions.FEATURE_ADD_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.feature.project_id) {
          return update(project, {
            features: {$push: [action.payload.feature]},
          });
        }
        return project;
      })},
    });
  }

  case featuresActions.FEATURE_EDIT_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.feature.project_id) {
          return update(project, {
            features: {$set: project.features.map(item => {
              if (item.id === action.payload.feature.id) {
                return action.payload.feature;
              }
              return item;
            })},
          });
        }
        return project;
      })},
    });
  }

  case featuresActions.FEATURE_REMOVE_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.feature.project_id) {
          return update(project, {
            features: {$set: project.features.filter(item => item.id !== action.payload.feature.id)},
          });
        }
        return project;
      })},
    });
  }

  case todosActions.TODO_ADD_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.todo.project_id) {
          return update(project, {
            features: {$set: project.features.map(feature => {
              if (feature.id === action.payload.todo.feature_id) {
                return update(feature, {
                  todos: {$push: [action.payload.todo]},
                });
              }
              return feature;
            })},
          });
        }
        return project;
      })},
    });
  }

  case todosActions.TODO_EDIT_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.todo.project_id) {
          return update(project, {
            features: {$set: project.features.map(feature => {
              if (feature.id === action.payload.todo.feature_id) {
                return update(feature, {
                  todos: {$set: feature.todos.map(item => {
                    if (item.id === action.payload.todo.id) {
                      return action.payload.todo;
                    }
                    return item;
                  })},
                });
              }
              return feature;
            })},
          });
        }
        return project;
      })},
    });
  }

  case todosActions.TODO_REMOVE_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.todo.project_id) {
          return update(project, {
            features: {$set: project.features.map(feature => {
              if (feature.id === action.payload.todo.feature_id) {
                return update(feature, {
                  todos: {$set: feature.todos.filter(item => item.id !== action.payload.todo.id)},
                });
              }
              return feature;
            })},
          });
        }
        return project;
      })},
    });
  }

  case todosActions.TODO_TOGGLE_SUCCESS: {
    return update(state, {
      items: {$set: state.items.map(project => {
        if (project.id === action.payload.todo.project_id) {
          return update(project, {
            features: {$set: project.features.map(feature => {
              if (feature.id === action.payload.todo.feature_id) {
                return update(feature, {
                  todos: {$set: feature.todos.map(item => {
                    if (item.id === action.payload.todo.id) {
                      return {
                        ...action.payload.todo,
                        complete: !action.payload.todo.complete,
                      };
                    }
                    return item;
                  })},
                });
              }
              return feature;
            })},
          });
        }
        return project;
      })},
    });
  }

  default:
    return state;
  }
}
