import * as types from './headerActionTypes';
import initialState from '../../../core/initialState';

export default function skillsReducer(state = initialState.header, action) {
  switch (action.type) {
    case types.LOAD_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, { pageData: action.headerPageData });
    case types.SET_ACTIVE_ITEM:
      return Object.assign({}, state, {
        pageData: Object.assign({}, state.pageData, { activeItem: action.activeItem })
      });
    default:
      return state;
  }
}
