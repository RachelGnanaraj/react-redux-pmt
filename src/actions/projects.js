import shortid from 'shortid';

/*
 *
 * PROJECT_ADD action
 */
export const PROJECT_ADD_START = 'PROJECT_ADD_START';
export const PROJECT_ADD_ERROR = 'PROJECT_ADD_ERROR';
export const PROJECT_ADD_SUCCESS = 'PROJECT_ADD_SUCCESS';
export function add(project) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: PROJECT_ADD_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: PROJECT_ADD_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: PROJECT_ADD_SUCCESS,
        payload: {
          project: {
            ...project,
            id: shortid.generate() + Date.now(),
            features: [],
          },
        },
      });
    }
  };
}

/*
 *
 * PROJECT_EDIT action
 */
export const PROJECT_EDIT_START = 'PROJECT_EDIT_START';
export const PROJECT_EDIT_ERROR = 'PROJECT_EDIT_ERROR';
export const PROJECT_EDIT_SUCCESS = 'PROJECT_EDIT_SUCCESS';
export function edit(project) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: PROJECT_EDIT_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: PROJECT_EDIT_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: PROJECT_EDIT_SUCCESS,
        payload: {
          project,
        },
      });
    }
  };
}

/*
 *
 * PROJECT_REMOVE action
 */
export const PROJECT_REMOVE_START = 'PROJECT_REMOVE_START';
export const PROJECT_REMOVE_ERROR = 'PROJECT_REMOVE_ERROR';
export const PROJECT_REMOVE_SUCCESS = 'PROJECT_REMOVE_SUCCESS';
export function remove(project) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: PROJECT_REMOVE_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: PROJECT_REMOVE_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: PROJECT_REMOVE_SUCCESS,
        payload: {
          project,
        },
      });
    }
  };
}
