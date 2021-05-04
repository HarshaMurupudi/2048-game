import React from "react";
import { connect } from "react-redux";
import { GrPlayFill } from "react-icons/gr";
import { IoIosUndo, IoIosRedo } from "react-icons/io";
import { GiStopSign } from "react-icons/gi";

import './replay.syles.scss'

function ReplaySection(props) {
  const handleReplay = () => {
    if (!props.replay) {
      props.dispatch({ type: "REPLAY_START" });
    } else {
      props.dispatch({ type: "REPLAY_STOP" });
    }
  };
  const handleUndo = () => {
    props.dispatch({ type: "UNDO" });
  };
  const handleRedo = () => {
    props.dispatch({ type: "REDO" });
  };
  return (
    <section className="replay_container">
      {/* undo button */}
      {props.undo && props.undo.length ? (
        <div onClick={handleUndo} className="undo_button">
          <div className="icon">
            <IoIosUndo />
          </div>
          <div className="text">Undo</div>
        </div>
      ) : (
        <div>
          <div className="icon">
            <IoIosUndo />
          </div>
          <div className="text">Undo</div>
        </div>
      )}
      {/* replay button */}
      {props.replayDataLength <= 1 || props.replay ? (
        <div>
          {props.replay ? (
            <div className="replay_button">
              <div className="icon" onClick={handleReplay}>
                <GiStopSign />
              </div>
              <div className="text">Stop</div>
            </div>
          ) : (
            <>
              <div className="icon">
                <GrPlayFill />
              </div>
              <div className="text">Play</div>
            </>
          )}
        </div>
      ) : (
        <div onClick={handleReplay} className="replay_button">
          <div className="icon">
            <GrPlayFill />
          </div>
          <div className="text">Play</div>
        </div>
      )}
      {/* redo button */}

      {props.redo && props.redo.length ? (
        <div onClick={handleRedo} className="redo_button">
          <div className="icon">
            <IoIosRedo />
          </div>
          <div className="text">Redo</div>
        </div>
      ) : (
        <div>
          <div className="icon">
            <IoIosRedo />
          </div>
          <div className="text">Redo</div>
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  localStorage.setItem("state", JSON.stringify(state));

  console.log(state)
  return {
    replay: state.gameInfo.replay,
    undo: state.gameInfo.undo,
    redo: state.gameInfo.redo,
    replayDataLength: state.gameInfo.replayAllData.length,
  };
}

export default connect(mapStateToProps)(ReplaySection);
