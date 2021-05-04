let initialState =
  JSON.parse(localStorage.getItem("leaderBoard")) || {
    scores: []
  };

export default function leaderBoard(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER_NAME":
      console.log(action.payload)
      const user = action.payload;

      // if user is present do nothing
      const existingUser = state.scores.find((score) => score.name === user)

      if (!existingUser) {
        const currentScoresList = state.scores
        currentScoresList.push({ name: user, score: 0 })

        localStorage.setItem(
          "currentUser",
          JSON.stringify({ name: user })
        )


        localStorage.setItem(
          "leaderBoard",
          JSON.stringify({ scores: currentScoresList })
        )


        return {
          ...state,
          scores: [...currentScoresList]
        }
      } else {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ name: existingUser.name })
        )
        return state;
      }

    case "UPDATE_SCOREBOARD":
      const leaderBoard = ((JSON.parse(localStorage.getItem("leaderBoard"))) || { scores: [] }).scores;
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const currentUserData = leaderBoard.find((score) => score.name === currentUser.name) || {};
      const { oldScore, currentScore } = action.payload
      const newScore = oldScore + currentScore;
      console.log(newScore, currentUserData.score)

      if (newScore > currentUserData.score) {
        currentUserData.score = newScore;
        console.log("saving to local")
        localStorage.setItem(
          "leaderBoard",
          JSON.stringify({ scores: leaderBoard })
        )

        return {
          ...state,
          scores: leaderBoard
        }

      }

      return state;

    default:
      return state;
  }
}