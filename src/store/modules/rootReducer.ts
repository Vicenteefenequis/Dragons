import { combineReducers } from 'redux';
import { appReducer as app } from './app';
import { dragonsReducer as dragon } from './dragons';

export default combineReducers({
  app,
  dragon,
});
