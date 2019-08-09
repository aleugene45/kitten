import { combineReducers } from 'redux';
import netinfo from './netinfo';
import kittens from './kittens';

export default combineReducers({
  kittens,
  netinfo
})
