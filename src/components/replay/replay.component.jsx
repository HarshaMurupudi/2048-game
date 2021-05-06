import React from "react";
import { connect } from "react-redux";
import { IoIosUndo, IoIosRedo } from "react-icons/io";
import { GiStopSign } from "react-icons/gi";
import { MdPlayArrow } from "react-icons/md"

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
      {props.undo && props.undo.length ? (
        <div onClick={handleUndo} className="undo_button">
          <div className="icon">
            <IoIosUndo color="white" />
          </div>
          <div className="text">Undo</div>
        </div>
      ) : (
        <div>
          <div className="icon">
            <IoIosUndo color="black" />
          </div>
          <div className="text">Undo</div>
        </div>
      )}
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
                <MdPlayArrow />
              </div>
              <div className="text">Play</div>
            </>
          )}
        </div>
      ) : (
        <div onClick={handleReplay} className="replay_button">
          <div className="icon">
            <MdPlayArrow />
          </div>
          <div className="text">Play</div>
        </div>
      )}
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
            <IoIosRedo color="black" />
          </div>
          <div className="text">Redo</div>
        </div>
      )}
    </section>
  );
}

function mapStateToProps(state) {
  localStorage.setItem("state", JSON.stringify(state)); //#TODO: Store only game into state

  return {
    replay: state.gameInfo.replay,
    undo: state.gameInfo.undo,
    redo: state.gameInfo.redo,
    replayDataLength: state.gameInfo.replayAllData.length,
  };
}

export default connect(mapStateToProps)(ReplaySection);
