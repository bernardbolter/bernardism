import axios from 'axios';

const BOLTER_URL = 'http://bolter.acolorfulhistory.com/wp-json/wp/v2/pages';

export const FETCH_BOLTER_INFO = 'FETCH_BOLTER_INFO';

export function fetchBolterInfo(infoType) {
  const url = `${BOLTER_URL}?slug=${infoType}`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_BOLTER_INFO,
    payload: request
  };
}
