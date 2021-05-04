import React from 'react';
import { v4 as uuid } from "uuid";

import './/number-container.styles.scss'

const NumberContainer = ({ data, props }) => {
  return (
    <>
      { data && !props.replay ? (
        <div className="number_conatiner">
          {data.map((row) => {
            return (
              <div className="number_row" key={uuid()}>
                {row.map((digit) => {
                  return (
                    <div className={`single_block b${digit}`} key={uuid()}>
                      {digit !== 0 ? digit : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : props.replay ? (
        <>
          <div className="number_conatiner">
            {(props.nowReplayingData || data).map((row) => {
              return (
                <div className="number_row" key={uuid()}>
                  {row.map((digit) => {
                    return (
                      <div className={`single_block b${digit}`} key={uuid()}>
                        {digit !== 0 ? digit : ""}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="number_conatiner">
          {[
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ].map((row) => {
            return (
              <div className="number_row">
                {row.map((digit) => {
                  return (
                    <div className={`single_block ${digit}`}>
                      {digit !== 0 ? digit : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  )
}

export default NumberContainer;