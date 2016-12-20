import { FETCH_BOLTER_INFO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BOLTER_INFO:
      return action.payload.data;
  }
  return state;
}
