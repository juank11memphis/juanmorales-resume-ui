import * as types from './homeActionTypes';
import initialState from '../../core/initialState';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case types.LOAD_HOME_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, {
        pageData: action.homePageData
      });
    default:
      return state;
  }
}
