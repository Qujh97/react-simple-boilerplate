import { combineReducers } from 'redux';
import todoReducer from './containers/Todo/reducer';
import filterReducer from './containers/Filter/reducer';
import weatherReducer from './containers/Weather/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
  weather: weatherReducer
});

export default rootReducer;
