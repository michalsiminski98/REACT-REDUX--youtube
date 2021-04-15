import {combineReducers} from 'redux';

import movieReducer from './movieReducer';
import profileReducer from './profileReducer';

export const rootReducer = combineReducers({
  // movies: movieReducer,
  profile: profileReducer,
});