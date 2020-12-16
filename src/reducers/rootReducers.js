import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducers';


export const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer
});