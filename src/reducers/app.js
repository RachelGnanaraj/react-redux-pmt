import update from 'immutability-helper';
import { REHYDRATE } from 'redux-persist/constants';

import * as appActions from '../actions/app.js';

const initialState = {
  storage: {
    loading: true,
    error: null,
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {

  case REHYDRATE: {
    if (action.error) {
      return update(state, {
        storage: {
          loading: { $set: false },
          error: { $set: action.error },
        },
      });
    }
    return update(state, {
      storage: {
        loading: { $set: false },
      },
    });
  }

  // don't reset state on LOGOUT (REHYDRATE happens only once, won't happen again)
  case appActions.LOGOUT: {
    return state;
  }

  default:
    return state;
  }
}
