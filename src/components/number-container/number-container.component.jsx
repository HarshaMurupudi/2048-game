import React from 'react';

const NumberContainer = () => {
  return (
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
  )
}

export default NumberContainer;