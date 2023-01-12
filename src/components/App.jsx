import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { MyCards } from './MyCards/MyCards';
import { useState } from 'react';
import { Swiper } from './Swiper/Swiper';
import { AddCards } from './AddCards/AddCards';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { getDataFromLS } from 'service/getDataFromLS';

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
          element={<AddCards addCard={addCard} />}
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
