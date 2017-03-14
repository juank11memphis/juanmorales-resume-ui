import * as types from './contactActionTypes';
import initialState from '../../core/initialState';

export default function projectsReducer(state = initialState.contact, action) {
  switch (action.type) {
    case types.LOAD_CONTACT_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, {
        pageData: action.contactPageData
      });
    default:
      return state;
  }
}
