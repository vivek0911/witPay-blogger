import _ from 'lodash';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_SELECTED':
      return _.assign({}, state, { article: action.payload });
    default:
      return state;
  }
};
