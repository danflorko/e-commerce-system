import { combineReducers } from 'redux';
import productsSaga from './productsSaga';
import cart from './cart';

const rootReducer = combineReducers({
  cart,
  productsSaga,
});

export default rootReducer;