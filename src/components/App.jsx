import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useState } from 'react';
import { Swiper } from './Swiper/Swiper';
import { AddCards } from './AddCards/AddCards';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { getDataFromLS } from 'service/getDataFromLS';
import { Home } from './Home/Home';

const LOKAL_STORAGE = 'cards';

export const App = () => {
  const [cards, setCards] = useState(() => getDataFromLS(LOKAL_STORAGE));
  const [isRotate, setRotate] = useState(true);

  useEffect(() => {
    localStorage.setItem(LOKAL_STORAGE, JSON.stringify(cards));
  }, [cards]);

  const addCard = (eng, translate) => {
    const newCard = { eng, translate, id: nanoid() };
    return setCards(prevState => {
      return [...prevState, newCard];
    });
  };

  const deleteCard = id => {
    return setCards(prevState => {
      return prevState.filter(card => card.id !== id);
    });
  };

  const resetRotate = () => {
    setRotate(true);
  };

  const toggleRotate = () => {
    if (isRotate) {
      setRotate(false);
    } else setRotate(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home cards={cards} />} />
        <Route
          path="mycards"
          element={
            <Swiper
              cards={cards}
              toggleRotate={toggleRotate}
              isRotate={isRotate}
              resetRotate={resetRotate}
            />
          }
        ></Route>
        <Route
          path="add-new-cards"
          addCard={setCards}
          element={
            <AddCards cards={cards} addCard={addCard} deleteCard={deleteCard} />
          }
        ></Route>
        <Route
          path="option"
          element={
            <div>
              Option
              <div>Settings card</div>
            </div>
          }
        ></Route>
      </Route>
    </Routes>
  );
};
