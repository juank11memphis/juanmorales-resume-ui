import * as types from './projectsActionTypes';
import {AjaxUtil} from '../../util';

function getFeaturedProjectsFetchUrl(){
  return AjaxUtil.BASE_URL + 'projects/featured';
}

export function loadFeaturedProjectsData() {
  return (dispatch) => {
    return fetch(getFeaturedProjectsFetchUrl())
      .then(response => response.json())
      .then(featuredProjectsData => dispatch(loadFeaturedProjectsDataSuccess(featuredProjectsData.result)));
  };
}

export function loadFeaturedProjectsDataSuccess(featuredProjectsData) {
  return {
    type: types.LOAD_FEATURED_PROJECTS_DATA_SUCCESS,
    featuredProjectsData
  };
}
