import shortid from 'shortid';

/*
 *
 * FEATURE_ADD action
 */
export const FEATURE_ADD_START = 'FEATURE_ADD_START';
export const FEATURE_ADD_ERROR = 'FEATURE_ADD_ERROR';
export const FEATURE_ADD_SUCCESS = 'FEATURE_ADD_SUCCESS';
export function add(feature, projectId) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: FEATURE_ADD_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: FEATURE_ADD_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: FEATURE_ADD_SUCCESS,
        payload: {
          feature: {
            ...feature,
            id: shortid.generate() + Date.now(),
            project_id: projectId,
            todos: [],
          },
        },
      });
    }
  };
}

/*
 *
 * FEATURE_EDIT action
 */
export const FEATURE_EDIT_START = 'FEATURE_EDIT_START';
export const FEATURE_EDIT_ERROR = 'FEATURE_EDIT_ERROR';
export const FEATURE_EDIT_SUCCESS = 'FEATURE_EDIT_SUCCESS';
export function edit(feature) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: FEATURE_EDIT_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: FEATURE_EDIT_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: FEATURE_EDIT_SUCCESS,
        payload: {
          feature,
        },
      });
    }
  };
}

/*
 *
 * FEATURE_REMOVE action
 */
export const FEATURE_REMOVE_START = 'FEATURE_REMOVE_START';
export const FEATURE_REMOVE_ERROR = 'FEATURE_REMOVE_ERROR';
export const FEATURE_REMOVE_SUCCESS = 'FEATURE_REMOVE_SUCCESS';
export function remove(feature) {
  return async (dispatch, getState, { api, history }) => {
    dispatch({
      type: FEATURE_REMOVE_START,
      payload: {},
    });

    if (false) {
      // error
      dispatch({
        type: FEATURE_REMOVE_ERROR,
        payload: {},
      });
    } else {
      // success
      dispatch({
        type: FEATURE_REMOVE_SUCCESS,
        payload: {
          feature,
        },
      });
    }
  };
}
