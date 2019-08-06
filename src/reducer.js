import { combineReducers } from 'redux';
import helloReducer from './containers/Hello/reducer';

const rootReducer = combineReducers({
  hello: helloReducer
});

export default rootReducer;
