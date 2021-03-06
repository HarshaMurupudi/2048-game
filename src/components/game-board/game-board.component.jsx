import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Winner from "../winner/winner.component";
import GameOver from "../game-over/game-over.component";
import TilesContainer from '../tiles-container/tiles-container.component'

import addNumber from "../../utils/addNumber";
import pressDown from "../../utils/handleDownKeyPress";
import pressUp from "../../utils/handleUpKeyPress";
import pressLeft from "../../utils/handleLeftKeyPress";
import pressRight from "../../utils/handleRightKeyPress";
import checkIfGameOver from "../../utils/checkGameOver";
import calculateScore from "../../utils/calculateScore";
import calculateWinner from "../../utils/calculateWinner";

import './game-board.styles.scss'

function GameBoard(props) {
  let [data, setData] = useState(props.data); // To maintain current state (current data)
  let [gameOver, setGameOver] = useState(props.gameOver);
  let [winner, setWinner] = useState(props.winner);
  let [shouldCheckWinner, setShouldCheckWinner] = useState(true); //safety check after winning condition #TODO: Remove in next refactor

  const handleUpdateScoreAndSetNewData = (newDataToBeAdded) => {
    let newScoreToBeAdded = calculateScore(newDataToBeAdded, data);
    props.dispatch({ type: "INCREASE_SCORE", payload: newScoreToBeAdded });
    props.dispatch({ type: "UPDATE_SCOREBOARD", payload: { oldScore: props.score, currentScore: newScoreToBeAdded } });
    setData(newDataToBeAdded);
    props.dispatch({ type: "UPDATE_BOARD_DATA", payload: newDataToBeAdded });
    if (calculateWinner(newDataToBeAdded) && shouldCheckWinner) {
      setWinner(true);
      props.dispatch({ type: "WINNER" });
      setShouldCheckWinner(false);
    }
  };

  const handleKeyDown = async (event, checkPreventDefault = true) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      const enteredName = await prompt('Please enter your name');
      props.dispatch({ type: "ADD_USER_NAME", payload: enteredName });
    }
    if (checkPreventDefault) {
      event.preventDefault();
    }
    // handle key clicks while replay
    if (props.replay) {
      return;
    }
    if (checkIfGameOver(data)) {
      setGameOver(true);
      props.dispatch({ type: "GAME_OVER" });
    }

    switch (event.keyCode) {
      case 38:
        let newData1 = pressUp(data);
        handleUpdateScoreAndSetNewData(newData1);
        break;
      case 40:
        let newData2 = pressDown(data);
        handleUpdateScoreAndSetNewData(newData2);
        break;
      case 37:
        let newData3 = pressLeft(data);
        handleUpdateScoreAndSetNewData(newData3);
        break;
      case 39:
        let newData4 = pressRight(data);
        handleUpdateScoreAndSetNewData(newData4);
        break;
      default:
        break;
    }
  };

  const initializeAddNumber = () => {
    if (data) {
      let newData = addNumber(
        data.map(function (arr) {
          return arr.slice();
        })
      );
      if (newData) {
        newData = addNumber(
          newData.map(function (arr) {
            return arr.slice();
          })
        );
      }
      if (newData) {
        setData(newData);
        props.dispatch({ type: "ADD_NEW_NUMBER", payload: newData });
      } else if (!newData) {
        setGameOver(true);
      }
    }
  };

  const areTilesEmpty = () => {
    let isEmpty = true;

    props.data.forEach(row => {
      const isAllZero = row.every(item => item === 0);

      if (!isAllZero) {
        isEmpty = false
      }
    });

    return isEmpty
  }

  // Adds two new two 2 value tiles when game starts for the first time 
  useEffect(() => {
    areTilesEmpty() && initializeAddNumber();
  }, []);

  // updates the current board state when ever it changes
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  // starts replay when ever replay is clicked
  useEffect(() => {
    if (props.replay) {
      var replayLength = props.replayAllData.length;
      props.replayAllData.map((initialGameHistory, index) => {
        setTimeout(
          function () {
            props.dispatch({
              type: "REPLAY_CONTINUE",
              payload: initialGameHistory,
            });
            if (replayLength === index + 1) {
              props.dispatch({
                type: "REPLAY_STOP",
              });
            }
          },
          index * 2000,
          initialGameHistory
        );
      });
    } else {
      for (let i = 0; i < 1000; i++) {
        window.clearTimeout(i);
      }
    }
  }, [props.replay]);

  // Checks and acts on changes in winner and gameover props
  useEffect(() => {
    if (winner !== props.winner) {
      setWinner(props.winner);
    }
    if (gameOver !== props.gameOver) {
      setGameOver(props.gameOver);
    }
  }, [props.winner, props.gameOver]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="game_board_container">
      {winner ? <Winner setShouldCheckWinner={setShouldCheckWinner} /> : ""}
      {gameOver ? <GameOver /> : ""}
      <TilesContainer data={data} props={props} />
    </div>
  );
}

function mapStateToProps(state) {
  localStorage.setItem("state", JSON.stringify(state));  //#TODO: Store only game into state

  return {
    data: state.gameInfo.data,
    replay: state.gameInfo.replay,
    replayAllData: state.gameInfo.replayAllData,
    nowReplayingData: state.gameInfo.nowReplayingData,
    redo: state.gameInfo.redo,
    winner: state.gameInfo.winner,
    gameOver: state.gameInfo.gameOver,
    score: state.gameInfo.score
  };
}
export default connect(mapStateToProps)(GameBoard);
