import 'promise-polyfill';
import { h, render } from 'preact';

// eslint-disable-next-line import/no-unresolved
import './style';

let root;
function init() {
  // eslint-disable-next-line global-require
  const App = require('./components/app').default;
  // eslint-disable-next-line react/jsx-filename-extension
  root = render(<App />, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
  // eslint-disable-next-line global-require
  require('preact/devtools'); // turn this on if you want to enable React DevTools!
  module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
