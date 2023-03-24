import { combineReducers } from 'redux';
import productsSaga from './productsSaga';
import cart from './cart';

// creating the root reducer for whole application store
const rootReducer = combineReducers({
  cart,
  productsSaga,
});

export default rootReducer;
