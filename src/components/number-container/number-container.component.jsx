import React from 'react';
import { v4 as uuid } from "uuid";

import TileRow from '../tile-row/tile-row.component'

import './number-container.styles.scss'

const NumberContainer = ({ data, props }) => {
  return (
    <>
      { data && !props.replay ? (
        <div className="number_conatiner">
          {data.map((row) => {
            return (
              <TileRow row={row} key={uuid()} />
            );
          })}
        </div>
      ) : props.replay ? (
        <>
          <div className="number_conatiner">
            {(props.nowReplayingData || data).map((row) => {
              return (
                <TileRow row={row} key={uuid()} />
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
          ].map((row, index) => {
            return (
              <TileRow row={row} key={uuid()} />
            );
          })}
        </div>
      )}
    </>
  )
}

export default NumberContainer;