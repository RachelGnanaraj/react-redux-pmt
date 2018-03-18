import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// Get the current location.
console.info('initial location', history.location);

// Listen for changes to the current location.
history.listen((location, action) => {
  // location is an object like window.location
  console.info('location change', action, location);
});

// Use push, replace, and go to navigate around.
// history.push('/home', { some: 'state' })

export default history;
