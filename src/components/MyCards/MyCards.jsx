import React from 'react';
import { CardWrap, CardFace } from './MyCards.styled';

export const MyCards = ({ cards, toggleRotate, isRotate }) => {
  return (
    <>
      {cards.map(card => (
        <CardWrap onClick={toggleRotate} key={card.eng} isRotate={isRotate}>
          <CardFace className="face" frontFaceStyle>
            {card.eng}
          </CardFace>
          <CardFace className="back" backFaceStyle>
            {card.translate}
          </CardFace>
        </CardWrap>
      ))}
    </>
  );
};
