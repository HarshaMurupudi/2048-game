import React from 'react';
import { connect } from "react-redux";

import addNumber from '../../utils/addNumber'
import { addnewNumber } from '../../redux/action'

import './leader-board.styles.scss'

const LeaderBoard = (props) => {
  const sortedScores = props.scores.sort((a, b) => (a.score > b.score) ? -1 : 1);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleNameSumbmit = async (e) => {
    e.preventDefault();
    // setName(true);
    const enteredName = await prompt('Please enter your name');
    props.dispatch({ type: "ADD_USER_NAME", payload: enteredName });
    props.dispatch({ type: "RESET_GAME" });
    var newData = addNumber([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    newData = addNumber(newData);
    props.dispatch(addnewNumber(newData));
    console.log(enteredName)
  }

  const renderTable = () => {
    if (sortedScores.length > 0) {
      return sortedScores.map(({ name, score }, index) => {
        return (
          <div class="row">
            <div class="cell" data-title="Rank">{index + 1}</div>
            <div class="cell" data-title="Name">{name}</div>
            <div class="cell" data-title="Score">{score}</div>
          </div>
        )
      })
    } else {
      return (
        <div class="row">
          <div class="cell" data-title="Rank">---</div>
          <div class="cell" data-title="Name">No Data</div>
          <div class="cell" data-title="Score">---</div>
        </div>
      )
    }


  }



  return (
    <div className="leader_board_container">
      <div className="player_container">
        <p><span>Player</span> <span>{currentUser ? currentUser.name : "---"}</span></p>
        <button type='button' onClick={handleNameSumbmit}>Change User</button>
      </div>
      <div class="table">
        <div class="row header">
          <div className="cell">Rank</div>
          <div className="cell">Name</div>
          <div className="cell">Score</div>
        </div>
        {renderTable()}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    scores: state.leaderBoard.scores || []
  }
}

export default connect(mapStateToProps)(LeaderBoard)