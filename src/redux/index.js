import { createStore } from "redux";

// import gameInfo from "./game-info/game-info.reducer";
import rootReducer from './root-reducer';

export let store = createStore(rootReducer);
