import axios from 'axios';

const BOLTER_ARTWORK_URL = 'http://bolter.acolorfulhistory.com/wp-json/wp/v2/artwork';

export const FETCH_BOLTER_ARTWORK = 'FETCH_BOLTER_ARTWORK';

export function fetchBolterArtwork() {
  const artRequest = axios.get(BOLTER_ARTWORK_URL);

  console.log('artRequest:', artRequest);

  return {
    type: FETCH_BOLTER_ARTWORK,
    payload: artRequest
  }
}
