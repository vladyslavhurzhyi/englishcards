import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ cards }) => {
  return (
    <>
      {cards.length < 1 ? (
        <Link to={'add-new-cards'}>Добавить первую карточку</Link>
      ) : (
        <>
          <Link to={'mycards'}>Карточки</Link>
          <br />
          <Link to={'add-new-cards'}>Добавить новую карточку</Link>
        </>
      )}
    </>
  );
};
