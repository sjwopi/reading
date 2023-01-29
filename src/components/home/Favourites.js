import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { favoritesCards } from '../../utils/cards';

export default function Favorites({ onCardOpen }) {
  return (
    <>
      <Swiper spaceBetween={20} slidesPerView="auto" className="favorites">
        {favoritesCards.map((card) => (
          <SwiperSlide className="favorites__item" onClick={() => {onCardOpen(card)}} key={card._id}>
            <img src={card.img} alt={card.name} className="favorites__img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="favorites__line"></div>
    </>
  );
}
