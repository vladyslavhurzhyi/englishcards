import React from 'react';
import { CardWrap, CardFace } from './MyCards.styled';

export const MyCards = ({ cards, toggleRotate, isRotate }) => {
  return (
    <>
      {cards.map(card => (
        <CardWrap onClick={toggleRotate} key={card.engText} isRotate={isRotate}>
          <CardFace className="face" frontFaceStyle>
            {card.engText}
          </CardFace>
          <CardFace className="back" backFaceStyle>
            {card.ruText}
          </CardFace>
        </CardWrap>
      ))}
    </>
  );
};
