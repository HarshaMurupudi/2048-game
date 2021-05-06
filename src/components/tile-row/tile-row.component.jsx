import React from 'react';

import Tile from '../tile/tile.component'

import './tile-row.styles.scss'

const TileRow = ({ row }) => {
  return (
    <div className="number_row">
      {row.map((digit) => {
        return (
          <Tile digit={digit} />
        );
      })}
    </div>
  )
}

export default TileRow;