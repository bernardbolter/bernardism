import { combineReducers } from 'redux';
import BolterInfoReducer from './reducer_bolter_info';
import BolterArtworkReducer from './reducer_bolter_artwork';

const rootReducer = combineReducers({
  bolterInfo: BolterInfoReducer,
  bolterArtwork: BolterArtworkReducer
});

export default rootReducer;
