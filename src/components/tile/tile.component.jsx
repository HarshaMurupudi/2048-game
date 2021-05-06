import React from 'react';

import { v4 as uuid } from "uuid";

import './tile.styles.scss'

const Tile = ({ digit }) => {
  return (
    <div className={`single_block b${digit}`} key={uuid()}>
      {digit !== 0 ? digit : ""}
    </div>
  )
}

export default Tile;