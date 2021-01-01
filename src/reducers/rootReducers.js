import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducers';
import { projectsReducer } from './projectsReducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  user: usersReducer,
  projects: projectsReducer
});