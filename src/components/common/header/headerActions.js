import * as types from './headerActionTypes';
import {AjaxUtil} from '../../../util';
import fetch from 'isomorphic-fetch';

function getPageDataFetchUrl(){
  return AjaxUtil.BASE_URL + 'header/pagedata';
}

export function loadPageData() {
  return (dispatch) => {
    return fetch(getPageDataFetchUrl())
      .then(response => response.json())
      .then(headerPageData => dispatch(loadPageDataSuccess(headerPageData.result[0])));
  };
}

export function loadPageDataSuccess(headerPageData) {
  return {
    type: types.LOAD_HEADER_PAGE_DATA_SUCCESS,
    headerPageData
  };
}

export function setActiveItem(activeItem) {
  return {
    type: types.SET_ACTIVE_ITEM,
    activeItem
  };
}
