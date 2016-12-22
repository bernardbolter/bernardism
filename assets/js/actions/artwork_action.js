import axios from 'axios';

const BOLTER_ARTWORK_URL = 'http://bolter.acolorfulhistory.com/wp-json/wp/v2/artwork/?per_page=100';

export const FETCH_BOLTER_ARTWORK = 'FETCH_BOLTER_ARTWORK';
export const SORT_ARTWORK_PAST = 'SORT_ARTWORK_PAST';

export function fetchBolterArtwork() {
  const artRequest = axios.get(BOLTER_ARTWORK_URL);

  return {
    type: FETCH_BOLTER_ARTWORK,
    payload: artRequest
  };
}

export function getBolterArtwork() {

  return {
    type: SORT_ARTWORK_PAST,
    payload: "random"
  };
}
