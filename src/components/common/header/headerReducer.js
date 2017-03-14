import * as types from './headerActionTypes';
import initialState from '../../../core/initialState';

export default function skillsReducer(state = initialState.header, action) {
  switch (action.type) {
    case types.LOAD_HEADER_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, { pageData: action.headerPageData });
    default:
      return state;
  }
}
