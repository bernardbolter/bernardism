import { FETCH_BOLTER_ARTWORK } from '../actions/artwork_action';
import { SORT_ARTWORK_PAST } from '../actions/artwork_action';
import _ from 'lodash';

export default function(state = [], action) {
  console.log('Action recieved', action);
  if (action.payload !== undefined) {
    var allArtwork = _.shuffle(action.payload.data);
  }
  console.log('allArtwork:', allArtwork)

  switch (action.type) {
    case FETCH_BOLTER_ARTWORK:
      return action.payload.data;
    case SORT_ARTWORK_PAST:
      return allArtwork;
  }
  return state;
}
