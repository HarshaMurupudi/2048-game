import { combineReducers } from 'redux';

// import replayReducer from './replay/replay.reducer'
import gameInfo from "./game-info/game-info.reducer";

export default combineReducers({
  // replay: replayReducer,
  gameInfo: gameInfo
});
