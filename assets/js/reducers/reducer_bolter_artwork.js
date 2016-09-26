import { FETCH_BOLTER_ARTWORK } from '../actions/artwork_action';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BOLTER_ARTWORK:
      return action.payload.data;
  }
  return state;
}
