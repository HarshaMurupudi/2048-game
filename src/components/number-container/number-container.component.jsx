import React from 'react';

import TileRow from '../tile-row/tile-row.component'

import './number-container.styles.scss'

const NumberContainer = ({ data, props }) => {
  return (
    <>
      { data && !props.replay ? (
        <div className="number_conatiner">
          {data.map((row) => {
            return (
              <TileRow row={row} />
            );
          })}
        </div>
      ) : props.replay ? (
        <>
          <div className="number_conatiner">
            {(props.nowReplayingData || data).map((row) => {
              return (
                <TileRow row={row} />
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
              <TileRow row={row} />
            );
          })}
        </div>
      )}
    </>
  )
}

export default NumberContainer;