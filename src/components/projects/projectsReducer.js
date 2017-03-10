import * as types from './projectsActionTypes';
import initialState from '../../core/initialState';

export default function projectsReducer(state = initialState.projects, action) {
  switch (action.type) {
    case types.LOAD_FEATURED_PROJECTS_DATA_SUCCESS:
      return Object.assign({}, state, {
        featured: action.featuredProjectsData
      });
    case types.LOAD_PROJECTS_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, {
        pageData: action.projectsPageData
      });
    case types.LOAD_PROJECTS_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.projectsData
      });
    default:
      return state;
  }
}
