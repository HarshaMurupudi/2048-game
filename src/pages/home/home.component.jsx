import React from 'react'
import { connect } from "react-redux";

import GameBoard from '../../components/game-board/game-board.component';
import ScoreSection from '../../components/score/score.component';
import ReplaySection from '../../components/replay/replay.component';
import LeaderBoard from '../../components/leader-board/leader-board.component'

import addNumber from '../../utils/addNumber'
import { addnewNumber } from '../../redux/action'

import { IoCaretUp, IoCaretForward, IoCaretDown, IoCaretBack } from "react-icons/io5";

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

  const renderIntitalMessage = () => {
    if (!(props.scores.length > 0)) {
      return (
        <div className="initial_message">
          <h3>Use keyboard to play</h3>
          <div className="blink">
            <div><IoCaretUp /></div>
            <div className="right_down_left_arrows_container">
              <IoCaretBack />
              <IoCaretDown />
              <IoCaretForward />
            </div>
          </div>
        </div>
      )
    } else {
      return <></>
    }
  }

  return (
    <section className="home_parent_conatiner">
      {renderIntitalMessage()}
      <div className="home_contanier">
        <div className="game_container">
          <ScoreSection />
          <div className="game_dispciption">
            {" "}
          Join the numbers and get to <b>2048 title!</b>{" "}
            <button onClick={handleResetGame}>Reset</button>
          </div>
          <GameBoard />
        </div>
        <ReplaySection />
        <LeaderBoard />
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    replay: state.gameInfo.replay,
    scores: state.leaderBoard.scores || []
  };
}

export default connect(mapStateToProps)(HomePage);