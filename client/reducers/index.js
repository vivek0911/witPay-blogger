import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  routing,
  articleReducer,
});

export default rootReducer;
