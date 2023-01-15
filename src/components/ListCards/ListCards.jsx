import React from 'react';
import { ListItem, DeleteCardText } from './ListCards.styled';

export const ListCards = ({ cards, deleteCard }) => {
  return (
    <>
      <ul>
        {cards.length > 0 && <DeleteCardText>Delete Card</DeleteCardText>}
        {cards.map(card => (
          <ListItem key={card.eng}>
            <p>
              {card.eng} - {card.translate}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteCard(card.id);
              }}
            >
              Delete
            </button>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
