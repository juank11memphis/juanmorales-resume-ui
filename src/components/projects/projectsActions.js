import * as types from './projectsActionTypes';
import {AjaxUtil} from '../../util';

function getFeaturedProjectsFetchUrl(){
  return AjaxUtil.BASE_URL + 'projects/featured';
}

function getPageDataFetchUrl(){
  return AjaxUtil.BASE_URL + 'projects/pagedata';
}

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'projects';
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

export function loadProjectsPageData() {
  return (dispatch) => {
    return fetch(getPageDataFetchUrl())
      .then(response => response.json())
      .then(projectsPageData => dispatch(loadProjectsPageDataSuccess(projectsPageData.result[0])));
  };
}

export function loadProjectsPageDataSuccess(projectsPageData) {
  return {
    type: types.LOAD_PROJECTS_PAGE_DATA_SUCCESS,
    projectsPageData
  };
}

export function loadProjectsData() {
  return (dispatch) => {
    return fetch(getFetchUrl())
      .then(response => response.json())
      .then(projectsData => dispatch(loadProjectsDataSuccess(projectsData.result)));
  };
}

export function loadProjectsDataSuccess(projectsData) {
  return {
    type: types.LOAD_PROJECTS_DATA_SUCCESS,
    projectsData
  };
}
