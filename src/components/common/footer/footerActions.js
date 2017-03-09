import * as types from './footerActionTypes';
import {AjaxUtil} from '../../../util';

function getPageDataFetchUrl(){
  return AjaxUtil.BASE_URL + 'footer/pagedata';
}

export function loadPageData() {
  return (dispatch) => {
    return fetch(getPageDataFetchUrl())
      .then(response => response.json())
      .then(footerPageData => dispatch(loadPageDataSuccess(footerPageData.result[0])));
  };
}

export function loadPageDataSuccess(footerPageData) {
  return {
    type: types.LOAD_FOOTER_PAGE_DATA_SUCCESS,
    footerPageData
  };
}
