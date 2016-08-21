import { combineReducers } from 'redux';
import BolterInfoReducer from './reducer_bolter_info';

const rootReducer = combineReducers({
  bolterInfo: BolterInfoReducer
});

export default rootReducer;
