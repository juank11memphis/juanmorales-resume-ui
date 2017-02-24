import * as types from './headerActionTypes';
import initialState from '../../../core/initialState';

export default function skillsReducer(state = initialState.header, action) {
  switch (action.type) {
    case types.LOAD_HEADER_DATA_SUCCESS:
      return Object.assign({}, state, action.headerData);
    default:
      return state;
  }
}
