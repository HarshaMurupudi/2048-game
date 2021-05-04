import { combineReducers } from 'redux';

// import replayReducer from './replay/replay.reducer'
import leaderBoard from './leader-board/leader-board.reducer'
import gameInfo from "./game-info/game-info.reducer";

export default combineReducers({
  gameInfo,
  leaderBoard
});
