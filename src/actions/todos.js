import shortid from 'shortid';

/*
 *
 * TODO_ADD action
 */
export const TODO_ADD_START = 'TODO_ADD_START';
export const TODO_ADD_ERROR = 'TODO_ADD_ERROR';
export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS';
export function add(todo, projectId, featureId) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: TODO_ADD_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: TODO_ADD_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: TODO_ADD_SUCCESS,
        payload: {
          todo: {
            ...todo,
            id: shortid.generate() + Date.now(),
            project_id: projectId,
            feature_id: featureId,
            complete: false,
          },
        },
      });
    }
  };
}

/*
 *
 * TODO_EDIT action
 */
export const TODO_EDIT_START = 'TODO_EDIT_START';
export const TODO_EDIT_ERROR = 'TODO_EDIT_ERROR';
export const TODO_EDIT_SUCCESS = 'TODO_EDIT_SUCCESS';
export function edit(todo) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: TODO_EDIT_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: TODO_EDIT_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: TODO_EDIT_SUCCESS,
        payload: {
          todo,
        },
      });
    }
  };
}

/*
 *
 * TODO_REMOVE action
 */
export const TODO_REMOVE_START = 'TODO_REMOVE_START';
export const TODO_REMOVE_ERROR = 'TODO_REMOVE_ERROR';
export const TODO_REMOVE_SUCCESS = 'TODO_REMOVE_SUCCESS';
export function remove(todo) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: TODO_REMOVE_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: TODO_REMOVE_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: TODO_REMOVE_SUCCESS,
        payload: {
          todo,
        },
      });
    }
  };
}

/*
 *
 * TODO_TOGGLE action
 */
export const TODO_TOGGLE_START = 'TODO_TOGGLE_START';
export const TODO_TOGGLE_ERROR = 'TODO_TOGGLE_ERROR';
export const TODO_TOGGLE_SUCCESS = 'TODO_TOGGLE_SUCCESS';
export function toggle(todo) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: TODO_TOGGLE_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: TODO_TOGGLE_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: TODO_TOGGLE_SUCCESS,
        payload: {
          todo,
        },
      });
    }
  };
}
