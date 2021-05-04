import React from 'react'
import { connect } from "react-redux";

import GameBoard from '../../components/game-board/game-board.component';
import ScoreSection from '../../components/score/score.component';
import ReplaySection from '../../components/replay/replay.component';
import LeaderBoard from '../../components/leader-board/leader-board.component'

import addNumber from '../../utils/addNumber'
import { addnewNumber } from '../../redux/action'

import './home.styles.scss'

const HomePage = (props) => {
  const handleResetGame = () => {
    if (!props.replay) {
      props.dispatch({ type: "RESET_GAME" });
      var newData = addNumber([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
      newData = addNumber(newData);
      props.dispatch(addnewNumber(newData));
    }
  };
  return (
    <section className="home_parent_conatiner">
      <div className="home_contanier">
        <ScoreSection />
        <div className="game_dispciption">
          {" "}
          Join the numbers and get to <b>2048 title!</b>{" "}
          <button onClick={handleResetGame}>Reset</button>
        </div>
        <GameBoard />
        <ReplaySection />

        <LeaderBoard />
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    replay: state.gameInfo.replay,
  };
}

export default connect(mapStateToProps)(HomePage);