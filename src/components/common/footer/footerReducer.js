import * as types from './footerActionTypes';
import initialState from '../../../core/initialState';

export default function skillsReducer(state = initialState.footer, action) {
  switch (action.type) {
    case types.LOAD_FOOTER_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, { pageData: action.footerPageData});
    default:
      return state;
  }
}
