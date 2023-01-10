import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { MyCards } from './MyCards/MyCards';
import { useState } from 'react';
import { Swiper } from './Swiper/Swiper';

export const App = () => {
  const [cards, setCards] = useState([
    { engText: 'word', ruText: 'мир' },
    { engText: 'although', ruText: 'хотя' },
    { engText: 'annoy', ruText: 'раздражать' },
    { engText: 'convincing', ruText: 'убедительный' },
  ]);

  const [isRotate, setRotate] = useState(true);

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
          element={
            <div>
              Add new Cards
              <div>
                <input type="text" />
              </div>
            </div>
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
