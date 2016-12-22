import { FETCH_BOLTER_ARTWORK } from '../actions/artwork_action';
import { SORT_ARTWORK_PAST } from '../actions/artwork_action';
import _ from 'lodash';

export default function(state = [], action) {
  console.log('Action recieved', action);
  if (action.type == FETCH_BOLTER_ARTWORK) {
    var storedArt = action.payload.data;
    console.log('storedArt:', storedArt);
  } else if (action.type == SORT_ARTWORK_PAST) {
    var shuffledArtwork = _.shuffle(storedArt);
    console.log('shuffledArtwork:', shuffledArtwork);
  }

  switch (action.type) {
    case FETCH_BOLTER_ARTWORK:
      return action.payload.data;
    case SORT_ARTWORK_PAST:
      return shuffledArtwork;
  }
  return state;
}
