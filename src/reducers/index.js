import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { LOGOUT } from '../actions/app.js';
// import { promiseTypeSuffixes, isProd } from '../constants.js';
// import { reportActionFailure } from '../services/errorReporting.js';
import appReducer from './app.js';
import userReducer from './user.js';
import projectsReducer from './projects.js';

let rootReducer = combineReducers({
  form: formReducer,
  app: appReducer,
  user: userReducer,
  projects: projectsReducer,
});

// reset app state on logout HOR
const resetOnLogout = (reducer, initialState) => (state, action) => {
  if (action.type === LOGOUT) {
    // Delete whole app state except some fixtures.
    state = {
      app: state.app, // handle app reducer inside itself
    };
  }
  return reducer(state, action);
};
rootReducer = resetOnLogout(rootReducer, {});

// in production only
// if (isProd) {
//   // catch all _ERRORs HOR
//   const errorReporting = (reducer, initialState) => (state, action) => {
//     if (
//       action.type.endsWith(`_${promiseTypeSuffixes[1]}`)
//     ) {
//       if (
//         action.type === 'LOGIN_ERROR' ||
//         action.type === 'REGISTER_ERROR'
//       ) {
//         if (action.error.status !== 400 && action.error.status !== 401) {
//           // reportActionFailure(action);
//           alert(action);
//         }
//       } else {
//         // reportActionFailure(action);
//         alert(action);
//       }
//     }
//     return reducer(state, action);
//   };
//   rootReducer = errorReporting(rootReducer, {});
// }

export default rootReducer;
