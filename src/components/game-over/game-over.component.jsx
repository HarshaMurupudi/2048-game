import React from "react";
import { connect } from "react-redux";
import addNumber from "../../utils/addNumber";

import './game-over.styles.scss'

const GameOver = (props) => {
  const handleGameReset = () => {
    props.dispatch({ type: "RESET_GAME" });
    var newData = addNumber([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    newData = addNumber(newData);
    props.dispatch({ type: "ADD_NEW_NUMBER", payload: newData });
  };

  return (
    <>
      <section className="game_over_container">
        <h3 className="game_over_title">Game Over!!!</h3>
        <div className="btn_game_over_reset" onClick={handleGameReset}>
          Retry
        </div>
      </section>
    </>
  );
};

export default connect()(GameOver);
