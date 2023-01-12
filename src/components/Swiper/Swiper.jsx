import { MyCards } from 'components/MyCards/MyCards';
import { Link } from 'react-router-dom';
import { SwiperStyled } from './Swiper.styled';

export const Swiper = ({ cards, toggleRotate, isRotate, resetRotate }) => {
  let reactSwipeEl;

  const nextClick = () => {
    resetRotate();
    reactSwipeEl.next();
  };

  const prevClick = () => {
    resetRotate();
    reactSwipeEl.prev();
  };

  return (
    <>
      {cards.length < 1 ? (
        <Link to={'/add-new-cards'}>Добавь первую карту</Link>
      ) : (
        <div>
          <SwiperStyled
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
          >
            <MyCards
              cards={cards}
              toggleRotate={toggleRotate}
              isRotate={isRotate}
            />
          </SwiperStyled>

          <button onClick={() => nextClick()}>Next</button>
          <button onClick={() => prevClick()}>Previous</button>
        </div>
      )}
    </>
  );
};
