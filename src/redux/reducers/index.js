import { combineReducers } from 'redux';
import favorites from './favoriteReducer';

const rootReducer = combineReducers({
  favorites
});

console.log("ENTRO AL STORE");

export default rootReducer;