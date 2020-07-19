import {combineReducers} from 'redux';
import {GetTopHundredReducer} from './GetTopHundredReducer';
const RootReducer = combineReducers({
  GetTopHundredReducer,
});

export default RootReducer;
