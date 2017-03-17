import * as types from './contactActionTypes';
import {AjaxUtil} from '../../util';
import fetch from 'isomorphic-fetch';

function getPageDataFetchUrl(){
  return AjaxUtil.BASE_URL + 'contact/pagedata';
}

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'contact';
}

export function loadContactPageData() {
  return (dispatch) => {
    return fetch(getPageDataFetchUrl())
      .then(response => response.json())
      .then(contactPageData => dispatch(loadContactPageDataSuccess(contactPageData.result[0])));
  };
}

export function loadContactPageDataSuccess(contactPageData) {
  return {
    type: types.LOAD_CONTACT_PAGE_DATA_SUCCESS,
    contactPageData
  };
}

export function sendContactMessage(data) {
  return () => {
    return fetch(getFetchUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json());
  };
}
