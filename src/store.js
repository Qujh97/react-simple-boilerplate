import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const devTool = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunk
    ),
    devTool
  )
);

export default store;
