import _ from 'lodash';
import initialState from './initialState';
import cmnts from '../comments.json';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_SELECTED':
      for (let i = 0; i < 5; i += 1) {
        let temp;
        temp = _.concat(temp, cmnts[i]);
      }
      return _.assign({}, state, { article: action.payload });
    default:
      return state;
  }
};

