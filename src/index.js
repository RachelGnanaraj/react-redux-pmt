import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import createFilter from 'redux-persist-transform-filter';
import { createLogger } from 'redux-logger';

// import registerServiceWorker from './registerServiceWorker.js';
import { isDev, storageKeyPrefix } from './constants.js';
import api from './services/api.js';
import history from './services/history.js';
import rootReducer from './reducers';
import Root from './containers/Root/Root.js';

import './index.css';

let middlewares = [
  thunk.withExtraArgument({
    api: api,
    history: history,
  }),
];

// apply these only in development mode
if (isDev) {
  // add actions to ignore here
  const ignoredActions = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => ignoredActions.indexOf(action.type) === -1,
  });
  // redux-logger middleware must be the last middleware in chain.
  middlewares.push(logger);
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  autoRehydrate(), // autoRehydrate is not a middleware but enhancer
);

const store = createStore(
  rootReducer,
  undefined, // preloadedState
  enhancer,
);

persistStore(store, {
  // debounce: 300,
  keyPrefix: storageKeyPrefix,
  // transforms: [
  //   // if you want to store only a subset of your state
  //   createFilter(
  //     'app', ['token', 'passwordToken'],
  //   ),
  // ],
  // whitelist: ['app'],
}, (err, incomingState) => {
  // after rehydration has completed
  console.info('rehydration complete');
});

// If things get out of wack, just purge the storage
// persistStore(store, config, callback).purge()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {/* we are not using the BrowserRouter directly */}
      {/* but plain Router object with passing custom History */}
      {/* with this we are able to manage history even outside of components (e.g. in action creators) */}
      <Router history={history}>
        <Route path="/" component={Root}/>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
