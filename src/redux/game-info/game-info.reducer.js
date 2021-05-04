let initialState = JSON.parse(localStorage.getItem("state"))
  ?
  JSON.parse(localStorage.getItem("state")).gameInfo : {
    data: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    replayAllData: [],
    nowReplayingData: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    replay: false,
    undo: [],
    redo: [],
    score: 0,
    winner: false,
    gameOver: false,
  };

export default function gameInfo(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_NUMBER":
      return {
        ...state,
        data: action.payload,
        replayAllData: state.replayAllData.concat([action.payload]),
      };
    case "UPDATE_BOARD_DATA":
      return {
        ...state,
        data: action.payload,
        replayAllData: state.replayAllData.concat([action.payload]),
        undo: state.replayAllData[state.replayAllData.length - 1],
      };
    case "REPLAY_START":
      return {
        ...state,
        replay: true,
        nowReplayingData: action.payload,
      };
    case "REPLAY_STOP":
      return {
        ...state,
        replay: false,
        nowReplayingData: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      };
    case "UNDO":
      return {
        ...state,
        redo: state.data,
        data: state.undo,
        undo: [],
      };
    case "REDO":
      return {
        ...state,
        undo: state.data,
        data: state.redo,
        redo: [],
      };
    case "TAKE_GAME_ONE_STEP_BACK":
      return {
        ...state,
        replayAllData: state.replayAllData.slice(0, -1),
        redo: [],
      };
    case "RESET_GAME":
      localStorage.removeItem("state");
      return {
        data: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        replayAllData: [],
        nowReplayingData: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        replay: false,
        undo: [],
        redo: [],
        score: 0,
        winner: false,
        gameOver: false,
      };
    case "INCREASE_SCORE":
      const highestScore = JSON.parse(localStorage.getItem("highestScore"));
      // const leaderBoard = ((JSON.parse(localStorage.getItem("leaderBoard"))) || { scores: [] }).scores;
      // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      // const currentUserData = leaderBoard.find((score) => score.name === currentUser.name) || {};
      const newScore = state.score + action.payload;

      if (newScore > highestScore) {
        localStorage.setItem(
          "highestScore",
          JSON.stringify(newScore)
        );
      }

      // if (newScore > currentUserData.score) {
      //   currentUserData.score = newScore;
      //   console.log("saving to local")
      //   localStorage.setItem(
      //     "leaderBoard",
      //     JSON.stringify({ scores: leaderBoard })
      //   )

      // }



      return {
        ...state,
        score: newScore,
      };
    case "GAME_OVER":
      return {
        ...state,
        gameOver: !state.gameOver,
      };
    case "WINNER":
      return {
        ...state,
        winner: !state.winner,
      };
    case "CONTINUE_GAME":
      return {
        ...state,
        winner: false,
      };
    default:
      return state;
  }
}
