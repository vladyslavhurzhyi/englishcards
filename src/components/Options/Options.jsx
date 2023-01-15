import React from 'react';

export const Options = ({ onIsRandom }) => {
  return (
    <div>
      Random Cards
      <br />
      <button type="button" onClick={onIsRandom}>
        Shuffle cards
      </button>
    </div>
  );
};
