import * as types from './headerActionTypes';
import {AjaxUtil} from '../../../util';

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'header';
}

export function loadHeaderData() {
  return (dispatch) => {
    return fetch(getFetchUrl())
      .then(response => response.json())
      .then(headerData => dispatch(loadHeaderDataSuccess(headerData.result[0])));
  };
}

export function loadHeaderDataSuccess(headerData) {
  return {
    type: types.LOAD_HEADER_DATA_SUCCESS,
    headerData
  };
}
