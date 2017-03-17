import * as types from './homeActionTypes';
import {AjaxUtil} from '../../util';
import fetch from 'isomorphic-fetch';

function getPageDataFetchUrl(){
  return AjaxUtil.BASE_URL + 'home/pagedata';
}

export function loadHomePageData() {
  return (dispatch) => {
    return fetch(getPageDataFetchUrl())
      .then(response => response.json())
      .then(homePageData => dispatch(loadHomePageDataSuccess(homePageData.result[0])));
  };
}

export function loadHomePageDataSuccess(homePageData) {
  return {
    type: types.LOAD_HOME_PAGE_DATA_SUCCESS,
    homePageData
  };
}
