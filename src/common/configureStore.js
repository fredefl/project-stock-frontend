import appReducer from './app/reducer';
import createFetch from './createFetch';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import recycle from 'redux-recycle';
import shortid from 'shortid';
import validate from './validate';
import { LOGOUT } from './auth/actions';
import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(options) {
  const {
    initialState,
    platformDeps = {},
    platformMiddleware = []
  } = options;

  // Este dependency injection middleware. So simple that we don't need a lib.
  // It's like mixed redux-thunk and redux-inject.
  const injectMiddleware = deps => ({ dispatch, getState }) => next => action =>
    next(typeof action === 'function'
      ? action({ ...deps, dispatch, getState })
      : action
    );

  const { device: { host } } = initialState;
  // Remember to set SERVER_URL for deploy.
  const serverUrl = host || process.env.SERVER_URL ||
    // Browser is ok with relative url. Server and React Native need absolute.
    (process.env.IS_BROWSER ? '' : 'http://localhost:8000');

  const middleware = [
    ...platformMiddleware,
    injectMiddleware({
      ...platformDeps,
      fetch: createFetch(serverUrl),
      getUid: () => shortid.generate(),
      now: () => Date.now(),
      validate: validate(() => store.getState()) // eslint-disable-line no-use-before-define
    }),
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    })
  ];

  // Enable logger only for browser and React Native development.
  const enableLogger = process.env.NODE_ENV !== 'production' &&
    (process.env.IS_BROWSER || process.env.IS_REACT_NATIVE);

  if (enableLogger) {
    const logger = createLogger({
      collapsed: true,
      // Convert immutable to JSON.
      stateTransformer: state => JSON.parse(JSON.stringify(state))
    });
    // Logger must be the last middleware in chain.
    middleware.push(logger);
  }

  const enableDevToolsExtension =
    process.env.NODE_ENV !== 'production' &&
    process.env.IS_BROWSER &&
    window.devToolsExtension;

  const createReduxStore = enableDevToolsExtension
    ? compose(applyMiddleware(...middleware), window.devToolsExtension())
    : applyMiddleware(...middleware);

  // Reset app store on logout to its initial state. Because app state can be
  // persisted in localStorage, recycle on logout is a must.
  const recycleAppReducer = recycle(appReducer, [LOGOUT]);

  const store = createReduxStore(createStore)(recycleAppReducer, initialState);

  // Enable hot reload where available.
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers.
    module.hot.accept('./app/reducer', () => {
      const nextAppReducer = require('./app/reducer');
      store.replaceReducer(nextAppReducer);
    });
  }

  return store;
}
